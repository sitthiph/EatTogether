import { createSelector } from 'reselect';

const selectRaw = (state) => state.myOrder.destroy;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => !!raw.loading,
);

export default {
  selectLoading
};

