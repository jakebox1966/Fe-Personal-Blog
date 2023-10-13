export const generatePageArray = (
    page: string | number | string[],
    totalPage: number
) => {
    const pageArray = [];

    for (let i = +page - 2; i <= +page + 2; i++) {
        if (i < 1) continue;
        if (i > totalPage) break;
        pageArray.push(i);
    }

    return pageArray;
};
