module.exports = {
  overlay : {
  position          : 'fixed',
  zIndex: 1000,
  top               : 0,
  left              : 0,
  right             : 0,
  bottom            : 0,
  backgroundColor   : 'rgba(15, 15, 155, 0.75)'
  },

  content : {
    position                   : 'absolute',
    width                      : '650px',
    height                     : '480px',
    top                        : '70px',
    left                       : '390px',
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
