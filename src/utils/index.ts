export const changeTheme = (theme: string) => {
  const app = document.querySelector('#app') as HTMLElement
  app.dataset.theme = theme
  app.className = theme
}