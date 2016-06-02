module.exports = {
  overlay : {
  position          : 'fixed',
  top               : 0,
  left              : 0,
  right             : 0,
  bottom            : 0,
  backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },

  content : {
    position                   : 'absolute',
    width: '650px',
    height: '480px',
    top                        : '40px',
    left                       : '300px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#eee',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};
