import {createSelector} from "reselect";

const getDirectory = state => state.directory;

export const selectSections = createSelector(
[getDirectory],
(section)=> section
);