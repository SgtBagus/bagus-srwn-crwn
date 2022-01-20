import { createSelector } from 'reselect';

const selectDirectory = (state) => {
    const { directory } = state;
    return directory;
}

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => {
        const { sections } = directory;
        return sections;
    }
)