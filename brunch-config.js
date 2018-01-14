exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'vue-swimlane.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'vue-swimlane.css'
    }
  },
  plugins: {
    vue: {
      extractCSS: true,
      out: './dist/vue-swimlane.css'
    }
  },
  paths: {
    public: 'dist'
  },
  npm: {
    enabled: true
  }
}
