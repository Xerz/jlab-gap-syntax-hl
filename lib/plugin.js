import './gap-mode'

export default [{
    id: 'jlab-gap-syntax-hl',
    autoStart: true,
    activate: function(app) {
      console.log('JupyterLab extension jlab-gap-syntax-hl is activated!');
      console.log(app.commands);
      registerGapFileType(app);
    }
}];

function registerGapFileType(app) {
  app.docRegistry.addFileType({
    name: 'gap',
    displayName: 'GAP',
    extensions: ['gap'],
    mimeTypes: ['text/x-gap'],
  });
}
