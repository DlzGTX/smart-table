import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    return (data, state, action) => {
        const searchTerm = state[searchField];

        if (!searchTerm) return data;

        return data.filter(row =>
            String(row[searchField])
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    };
}
