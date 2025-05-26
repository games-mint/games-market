const icons = [
    "category",
    "add-square",
    "game",
    "layer",
    'flash',
    'arrow-left',
    'arrow-right',
    'mobile',
    'monitor',
    'arrow-circle-down',
    'arrow-circle-up',
    'filter-search',
    'star',
    'bag',
    'like-tag'
] as const;

export type Icons = (typeof icons)[number];;