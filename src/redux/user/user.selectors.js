import { createSelector } from 'reselect';

const selectUser = (state) => {
    const { user } = state;
    return user;
}

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => {
      const { currentUser } = user;
      return currentUser;
  }
);
