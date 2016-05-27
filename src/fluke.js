

(function() {

  // Constructor
  // -----------
  function Fluke () {
    if (!(this instanceof Fluke)) {
      return new Fluke();
    }

    this.random = function() {
      return Math.random(this);
    };
    return this;

  }

  function testRange(test, errorMessage) {
    if (test) {
      throw new Error(errorMessage);
    }
  }

  Fluke.prototype.version = '0.0.1';

  // define some constants
  const maxNum      = Number.MAX_SAFE_INTEGER;
  const minNum      = Number.MIN_SAFE_INTEGER;
  const alpha_lower = 'abcdefghijklymnopqrstuvwxyz';
  const alpha_upper = alpha_lower.toUpperCase();
  const numbers     = '01234556789';

  // helper functions



  // Fundamentals
  // ------------

  /**
   *  Return a random Float
   *
   *  @param {number} min number
   *  @param {number} max number
   *  @throws {Error}
   *  @returns {float}
   */

  Fluke.prototype.floating = function(min, max) {
    if (arguments.length > 0) {
      return this.random() * (max - min) + min;
    }

    else {
      throw new Error('min and max should be supplied');
    }
  };

  /**
   *  Return a random bool
   *
   *  @param {}
   *  @throws {Error}
   *  @returns {string}
   */

  Fluke.prototype.boolean = function() {
    const randomNum = Math.random() >= 0.5;
    return randomNum;
  };

  /**
   *  Return a random character
   *
   *  @param {}
   *  @throws {Error}
   *  @returns {string}
   */

  Fluke.prototype.character = function(options) {
    const symbols = '!@#$%^&*(){}[]';
    const set = alpha_lower.concat(alpha_upper, symbols);

    return set.substr(Math.floor(this.random() * 62), 1);

  };

  /**
   *  Return a random integer
   *
   *  @param {min}
   *  @param {max}
   *  @throws {Error}
   *  @returns {string}
   */

  Fluke.prototype.integer = function(min, max) {
    if (arguments.length > 0) {
      return Math.floor(this.random() * (max - min)) + min;
    }

    else {
      throw new Error('min and max should be supplied');
    }

  };

  /**
   *  Return a random string
   *
   *  @throws {Error}
   *  @returns {string}
   */

  Fluke.prototype.string = function(m) {
    var m = m || 9;
    var s = '';
    var r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i=0; i < m; i++) {
      s += r.charAt(Math.floor(Math.random()*r.length));
    }
    return s;
  };

  // End Fundamentals
  // <----------------


  // Technology
  // ---------------

  /**
   *  Return a random programming language
   *  @throws {Error}
   *  @returns {string}
   */

  Fluke.prototype.languages = function() {

    // array of software languages
    const sLanguages = ['4th Dimension/4D', 'ABAP', 'ABC', 'ActionScript', 'Ada', 'Agilent VEE', 'Algol', 'Alice', 'Angelscript', 'Apex', 'APL', 'AppleScript', 'Arc', 'Arduino', 'ASP', 'AspectJ', 'Assembly', 'ATLAS', 'Augeas', 'AutoHotkey', 'AutoIt', 'AutoLISP', 'Automator', 'Avenue', 'Awk', 'Bash', '(Visual) Basic', 'bc', 'BCPL', 'BETA', 'BlitzMax', 'Boo', 'Bourne Shell', 'Bro', 'C', 'C Shell', 'C#', 'C++', 'C++/CLI', 'C-Omega', 'Caml', 'Ceylon', 'CFML', 'cg', 'Ch', 'CHILL', 'CIL', 'CL (OS/400)', 'Clarion', 'Clean', 'Clipper', 'Clojure', 'CLU', 'COBOL', 'Cobra', 'CoffeeScript', 'ColdFusion', 'COMAL', 'Common Lisp', 'Coq', 'cT', 'Curl', 'D', 'Dart', 'DCL', 'DCPU-16 ASM', 'Delphi/Object Pascal', 'DiBOL', 'Dylan', 'E', 'eC', 'Ecl', 'ECMAScript', 'EGL', 'Eiffel', 'Elixir', 'Emacs Lisp', 'Erlang', 'Etoys', 'Euphoria', 'EXEC', 'F#', 'Factor', 'Falcon', 'Fancy', 'Fantom', 'Felix', 'Forth', 'Fortran', 'Fortress', '(Visual) FoxPro', 'Gambas', 'GNU Octave', 'Go', 'Google AppsScript', 'Gosu', 'Groovy', 'Haskell', 'haXe', 'Heron', 'HPL', 'HyperTalk', 'Icon', 'IDL', 'Inform', 'Informix-4GL', 'INTERCAL', 'Io', 'Ioke', 'J', 'J#', 'JADE', 'Java', 'Java FX Script', 'JavaScript', 'JScript', 'JScript.NET', 'Julia', 'Korn Shell', 'Kotlin', 'LabVIEW', 'Ladder Logic', 'Lasso', 'Limbo', 'Lingo', 'Lisp', 'Logo', 'Logtalk', 'LotusScript', 'LPC', 'Lua', 'Lustre', 'M4', 'MAD', 'Magic', 'Magik', 'Malbolge', 'MANTIS', 'Maple', 'Mathematica', 'MATLAB', 'Max/MSP', 'MAXScript', 'MEL', 'Mercury', 'Mirah', 'Miva', 'ML', 'Monkey', 'Modula-2', 'Modula-3', 'MOO', 'Moto', 'MS-DOS Batch', 'MUMPS', 'NATURAL', 'Nemerle', 'Nimrod', 'NQC', 'NSIS', 'Nu', 'NXT-G', 'Oberon', 'Object Rexx', 'Objective-C', 'Objective-J', 'OCaml', 'Occam', 'ooc', 'Opa', 'OpenCL', 'OpenEdge ABL', 'OPL', 'Oz', 'Paradox', 'Parrot', 'Pascal', 'Perl', 'PHP', 'Pike', 'PILOT', 'PL/I', 'PL/SQL', 'Pliant', 'PostScript', 'POV-Ray', 'PowerBasic', 'PowerScript', 'PowerShell', 'Processing', 'Prolog', 'Puppet', 'Pure Data', 'Python', 'Q', 'R', 'Racket', 'REALBasic', 'REBOL', 'Revolution', 'REXX', 'RPG (OS/400)', 'Ruby', 'Rust', 'S', 'S-PLUS', 'SAS', 'Sather', 'Scala', 'Scheme', 'Scilab', 'Scratch', 'sed', 'Seed7', 'Self', 'Shell', 'SIGNAL', 'Simula', 'Simulink', 'Slate', 'Smalltalk', 'Smarty', 'SPARK', 'SPSS', 'SQR', 'Squeak', 'Squirrel', 'Standard ML', 'Suneido', 'SuperCollider', 'TACL', 'Tcl', 'Tex', 'thinBasic', 'TOM', 'Transact-SQL', 'Turing', 'TypeScript', 'Vala/Genie', 'VBScript', 'Verilog', 'VHDL', 'VimL', 'Visual Basic .NET', 'WebDNA', 'Whitespace', 'X10', 'xBase', 'XBase++', 'Xen', 'XPL', 'XSLT', 'XQuery', 'yacc', 'Yorick', 'Z shell'];

    const l = sLanguages[Math.floor(this.random() * sLanguages.length)];
    return l;

  };

  /**
   *  Return random top level domains
   *  @throws {Error}
   *  @returns {string}
   */

  Fluke.prototype.domains = function() {

  };

  /**
   *  Return random file extensions
   *  @throws {Error}
   *  @returns {string}
   */

  Fluke.prototype.extensions = function() {



  };

  // End Technology
  // <-------------


  // Text
  // ---------------

  /**
   *  Return random lorem ipsum
   *  @throws {Error}
   *  @returns {long string}
   */

  Fluke.prototype.lipsum = function() {

    const wordPool = ['lorem','ipsum','dolor','sit','amet,','consectetur','adipisicing','elit,','sed','do','eiusmod','tempor','incididunt','ut','labore','et','dolore','magna','aliqua.','enim','ad','minim','veniam,','quis','nostrud','exercitation','ullamco','laboris','nisi','ut','aliquip','ex','ea','commodo','consequat.','duis','aute','irure','dolor','in','reprehenderit','in','voluptate','velit','esse','cillum','dolore','eu','fugiat','nulla','pariatur.','excepteur','sint','occaecat','cupidatat','non','proident,','sunt','in','culpa','qui','officia','deserunt','mollit','anim','id','est','laborum.','sed','ut','perspiciatis,','unde','omnis','iste','natus','error','sit','voluptatem','accusantium','doloremque','laudantium,','totam','rem','aperiam','eaque','ipsa,','quae','ab','illo','inventore','veritatis','et','quasi','architecto','beatae','vitae','dicta','sunt,','explicabo.','nemo','enim','ipsam','voluptatem,','quia','voluptas','sit,','aspernatur','aut','odit','aut','fugit,','sed','quia','consequuntur','magni','dolores','eos,','qui','ratione','voluptatem','sequi','nesciunt,','neque','porro','quisquam','est,','qui','dolorem','ipsum,','quia','dolor','sit,','amet,','consectetur,','adipisci','velit,','sed','quia','non','numquam','eius','modi','tempora','incidunt,','ut','labore','et','dolore','magnam','aliquam','quaerat','voluptatem.','ut','enim','ad','minima','veniam,','quis','nostrum','exercitationem','ullam','corporis','suscipit','laboriosam,','nisi','ut','aliquid','ex','ea','commodi','consequatur?','quis','autem','vel','eum','iure','reprehenderit,','qui','in','ea','voluptate','velit','esse,','quam','nihil','molestiae','consequatur,','vel','illum,','qui','dolorem','eum','fugiat,','quo','voluptas','nulla','pariatur?','at','vero','eos','et','accusamus','et','iusto','odio','dignissimos','ducimus,','qui','blanditiis','praesentium','voluptatum','deleniti','atque','corrupti,','quos','dolores','et','quas','molestias','excepturi','sint,','obcaecati','cupiditate','non','provident,','similique','sunt','in','culpa,','qui','officia','deserunt','mollitia','animi,','id','est','laborum','et','dolorum','fuga.','harum','quidem','rerum','facilis','est','et','expedita','distinctio.','Nam','libero','tempore,','cum','soluta','nobis','est','eligendi','optio,','cumque','nihil','impedit,','quo','minus','id,','quod','maxime','placeat,','facere','possimus,','omnis','voluptas','assumenda','est,','omnis','dolor','repellendus.','temporibus','autem','quibusdam','aut','officiis','debitis','aut','rerum','necessitatibus','saepe','eveniet,','ut','et','voluptates','repudiandae','sint','molestiae','non','recusandae.','itaque','earum','rerum','hic','tenetur','a','sapiente','delectus,','aut','reiciendis','voluptatibus','maiores','alias','consequatur','aut','perferendis','doloribus','asperiores','repellat'];

    const minWords = 15;
    const maxWords = 100;

    const rands = Math.floor(this.random()*(maxWords - minWords)) + minWords;

    let ret = '';

    for(i = 0; i < rands; i++) {
      let newTxt = wordPool[Math.floor(Math.random() * (wordPool.length - 1))];
      if(ret.substring(ret.length-1, ret.length) == '.' || ret.substring(ret.length-1,ret.length) == '?') {
        newTxt = newTxt.substring(0,0).toUpperCase() + newTxt.substring(1, newTxt.length);
      }
      ret += '' + newTxt;
    }

    return ret.substring(0,ret.length-1);


  };

  /**
   *  Return a word capitalized
   *  @param {string}
   *  @throws {Error}
   *  @returns {String}
   */

  Fluke.prototype.capitalize = function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  };

  /**
   *  Return a word
   *  *  @param {string}
   *  @throws {Error}
   *  @returns {String}
   */

  Fluke.prototype.word = function() {
    const wordList = ['turn','twelve','twenty','twice','two','type','typical','uncle',
      'under','underline','understanding','unhappy','union','unit','universe','unknown',
      'unless','until','unusual','up','upon','upper','upward','us',
      'use','useful','using','usual','usually','valley','valuable','value',
      'vapor','variety','various','vast','vegetable','verb','vertical','very',
      'vessels','victory','view','village','visit','visitor','voice','volume',
      'vote','vowel','voyage','wagon','wait','walk','wall','want',
      'war','warm','warn','was','wash','waste','watch','water',
      'wave','way','we','weak','wealth','wear','weather','week',
      'weigh','weight','welcome','well','went','were','west','western',
      'wet','whale','what','whatever','wheat','wheel','when','whenever',
      'where','wherever','whether','which','while','whispered','whistle','white',
      'who','whole','whom','whose','why','wide','widely','wife',
      'wild','will','willing','win','wind','window','wing','winter',
      'wire','wise','wish','with','within','without','wolf','women',
      'won','wonder','wonderful','wood','wooden','wool','word','wore',
      'work','worker','world','worried','worry','worse','worth','would',
      'wrapped','write','writer','writing','written','wrong','wrote','yard',
      'year','yellow','yes','yesterday','yet','you','young','younger',
      'your','yourself','youth','zero','zoo'];


    function word() {
      return wordList[randInt(wordList.length)];
    }

    function randInt() {
      return Math.floor(Math.random() * 62);
    }

    // No arguments = generate one word
    if (typeof(options) === 'undefined') {
      return word();
    }
  };

  var data = {
    fNames: {

    },

    lNames: {

    },

    words: {

    },

    countries: {

    },

    cities: {

    },

    states: {

    }

  };


  // CommonJS module
  //if (typeof exports !== 'undefined') {
  //  if (typeof module !== 'undefined' && module.exports) {
  //    exports = module.exports = Fluke;
  //  }
  //  exports.Chance = Fluke;
  //}

  // Register as an anonymous AMD module
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return Fluke;
    });
  }

  if (typeof window === 'object' && typeof window.document === 'object') {
    window.Fluke = Fluke;
    window.fluke = new Fluke();

  }
})();
