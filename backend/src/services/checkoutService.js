const CheckoutRepository = require('../database/repositories/checkoutRepository');
const ValidationError = require('../errors/validationError');
const FirebaseRepository = require('../database/repositories/firebaseRepository');

/**
 * Handles Checkout operations
 */
module.exports = class CheckoutService {
  constructor({ currentUser, language }) {
    this.repository = new CheckoutRepository();
    this.currentUser = currentUser;
    this.language = language;
  }

  /**
   * Creates a Checkout.
   *
   * @param {*} data
   */
  async create(data) {
    const batch = await FirebaseRepository.createBatch();

    try {
      const record = await this.repository.create(data, {
        batch: batch,
        currentUser: this.currentUser,
      });

      await FirebaseRepository.commitBatch(batch);

      return this.repository.findById(record.id);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates a Checkout.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const batch = await FirebaseRepository.createBatch();

    try {
      const record = await this.repository.update(
        id,
        data,
        {
          batch,
          currentUser: this.currentUser,
        },
      );

      await FirebaseRepository.commitBatch(batch);

      return this.repository.findById(record.id);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Destroy all Checkouts with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const batch = await FirebaseRepository.createBatch();

    try {
      for (const id of ids) {
        await this.repository.destroy(id, {
          batch,
          currentUser: this.currentUser,
        });
      }

      await FirebaseRepository.commitBatch(batch);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Finds the Checkout by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return this.repository.findById(id);
  }

  /**
   * Finds Checkouts for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return this.repository.findAllAutocomplete(
      search,
      limit,
    );
  }

  /**
   * Finds Checkouts based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return this.repository.findAndCountAll(args);
  }

  /**
   * Imports a list of Checkouts.
   *
   * @param {*} data
   * @param {*} importHash
   */
  async import(data, importHash) {
    if (!importHash) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  /**
   * Checks if the import hash already exists.
   * Every item imported has a unique hash.
   *
   * @param {*} importHash
   */
  async _isImportHashExistent(importHash) {
    const count = await this.repository.count({
      importHash,
    });

    return count > 0;
  }
};
