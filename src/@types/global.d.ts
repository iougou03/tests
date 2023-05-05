declare global {
    interface PreloadAPI { version: string }
  
    interface Window { api: PreloadAPI }
  }
  
  export {}