
// ------------------------------- *** -------------------------------
export const PageTitles = {
    MAINTITLE: '🗜️ ORBIT TOOLBOX 💻',
    SEPARATOR: '➤',
    // APP PAGES / VIEWS
    HOME: 'HOME',
};


// ------------------------------- *** -------------------------------
export function getTabTitle(pageName: string): string {
    return `${PageTitles.MAINTITLE} ${PageTitles.SEPARATOR} ${pageName}`;
}
