module.exports = {
  overlay : {
  position          : 'fixed',
  zIndex: 1000,
  top               : 0,
  left              : 0,
  right             : 0,
  bottom            : 0,
  backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },

  content : {
    position                   : 'absolute',
    width                      : '350px',
    height                     : '360px',
    top                        : '300px',
    left                       : '542px',
    right                      : '0px',
    bottom                     : '0px',
    border                     : '1px solid #ccc',
    background                 : '#eee',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};
