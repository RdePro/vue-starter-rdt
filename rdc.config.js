module.exports = {
  framework: 'vue',
  docs: {
    title: 'rdc-vue-starter',
    url: 'https://rdepro.github.io/rdc-vue-starter/',
  },
  render: {
    includes: [
      '.html',
      '.js',
    ],
    mock: {
      title: 'title'
    }
  },
  mappings: [
    {
      from: 'app/App.vue',
      to: 'src/App.vue'
    },
    {
      from: 'app/components',
      to: 'src/components'
    }
  ],
  docker: {
    tag: 'rdebase/rdc-vue-starter:0.0.1-alpha.6',
    ports: [
      '8080:8080'
    ]
  },
  lint: {
    ext: ['.js', '.vue']
  }
};
