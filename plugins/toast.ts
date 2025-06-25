
export default defineNuxtPlugin((nuxtApp) => {
  const toast = useToast().settings({
      position: "topRight",
    layout: 2,
    maxWidth: 350,
    displayMode: 2,
    drag:true
      
  })

  nuxtApp.provide('toast', toast);
});
