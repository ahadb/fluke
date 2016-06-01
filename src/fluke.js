

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

  Fluke.prototype.version = '0.0.1';

  function testFluke(test, errorMessage) {
    if (test) {
      throw new Error(errorMessage);
    }
  }

  // define some constants
  const maxNum       = Number.MAX_SAFE_INTEGER;
  const minNum       = Number.MIN_SAFE_INTEGER;
  const alpha_lower  = 'abcdefghijklymnopqrstuvwxyz';
  const alpha_upper  = alpha_lower.toUpperCase();
  const numbers      = '01234556789';
  const dollarCurr   = '$';
  const euroCurr     = '€';
  const russianCurr  = '₽';
  const britishCurr  = '£';
  const kuwaitiCurr  = 'د.ك ';

  // helper functions
  // @todo: options, defaults


  (function simpleBenchmarks() {
    var totalTime,
      start = new Date,
      iterations = 1000;
    while (iterations--) {

    }
    // totalTime → the number of milliseconds taken
    // to execute the code snippet 1000 times
    totalTime = new Date - start;
  })();



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

  /** ==> Boolean
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

  /** ==> Character
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

  /** ==> Integer
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

  /** ==> String
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

  /** ==> Programming languge
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

  /** ==> Domains
   *  Return random top level domains
   *  @throws {Error}
   *  @returns {string}
   */

  Fluke.prototype.domains = function() {

  };

  /** ==> File Extensions
   *  Return random file extensions
   *  @throws {Error}
   *  @returns {string}
   */

  Fluke.prototype.extensions = function() {



  };

  Fluke.prototype.avatar = function() {

  };



  // End Technology
  // <-------------


  // Text
  // ---------------

  /** ==> Lorem Ipsum
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

  /** ==> Capitalized Word
   *  Return a word capitalized
   *  @param {string}
   *  @throws {Error}
   *  @returns {String}
   */

  Fluke.prototype.capitalize = function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  };

  /** ==> Word
   *  Return a word
   *  @param {string}
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

  // End Text
  // <---------------

  // data
  var data = {
    fNames: {

    },

    lNames: {

    },

    words: {

    },

    countries: [
      {'name': 'Afghanistan', 'code': 'AF'},
      {'name': 'Åland Islands', 'code': 'AX'},
      {'name': 'Albania', 'code': 'AL'},
      {'name': 'Algeria', 'code': 'DZ'},
      {'name': 'American Samoa', 'code': 'AS'},
      {'name': 'AndorrA', 'code': 'AD'},
      {'name': 'Angola', 'code': 'AO'},
      {'name': 'Anguilla', 'code': 'AI'},
      {'name': 'Antarctica', 'code': 'AQ'},
      {'name': 'Antigua and Barbuda', 'code': 'AG'},
      {'name': 'Argentina', 'code': 'AR'},
      {'name': 'Armenia', 'code': 'AM'},
      {'name': 'Aruba', 'code': 'AW'},
      {'name': 'Australia', 'code': 'AU'},
      {'name': 'Austria', 'code': 'AT'},
      {'name': 'Azerbaijan', 'code': 'AZ'},
      {'name': 'Bahamas', 'code': 'BS'},
      {'name': 'Bahrain', 'code': 'BH'},
      {'name': 'Bangladesh', 'code': 'BD'},
      {'name': 'Barbados', 'code': 'BB'},
      {'name': 'Belarus', 'code': 'BY'},
      {'name': 'Belgium', 'code': 'BE'},
      {'name': 'Belize', 'code': 'BZ'},
      {'name': 'Benin', 'code': 'BJ'},
      {'name': 'Bermuda', 'code': 'BM'},
      {'name': 'Bhutan', 'code': 'BT'},
      {'name': 'Bolivia', 'code': 'BO'},
      {'name': 'Bosnia and Herzegovina', 'code': 'BA'},
      {'name': 'Botswana', 'code': 'BW'},
      {'name': 'Bouvet Island', 'code': 'BV'},
      {'name': 'Brazil', 'code': 'BR'},
      {'name': 'British Indian Ocean Territory', 'code': 'IO'},
      {'name': 'Brunei Darussalam', 'code': 'BN'},
      {'name': 'Bulgaria', 'code': 'BG'},
      {'name': 'Burkina Faso', 'code': 'BF'},
      {'name': 'Burundi', 'code': 'BI'},
      {'name': 'Cambodia', 'code': 'KH'},
      {'name': 'Cameroon', 'code': 'CM'},
      {'name': 'Canada', 'code': 'CA'},
      {'name': 'Cape Verde', 'code': 'CV'},
      {'name': 'Cayman Islands', 'code': 'KY'},
      {'name': 'Central African Republic', 'code': 'CF'},
      {'name': 'Chad', 'code': 'TD'},
      {'name': 'Chile', 'code': 'CL'},
      {'name': 'China', 'code': 'CN'},
      {'name': 'Christmas Island', 'code': 'CX'},
      {'name': 'Cocos (Keeling) Islands', 'code': 'CC'},
      {'name': 'Colombia', 'code': 'CO'},
      {'name': 'Comoros', 'code': 'KM'},
      {'name': 'Congo', 'code': 'CG'},
      {'name': 'Congo, The Democratic Republic of the', 'code': 'CD'},
      {'name': 'Cook Islands', 'code': 'CK'},
      {'name': 'Costa Rica', 'code': 'CR'},
      {'name': 'Cote D\'Ivoire', 'code': 'CI'},
      {'name': 'Croatia', 'code': 'HR'},
      {'name': 'Cuba', 'code': 'CU'},
      {'name': 'Cyprus', 'code': 'CY'},
      {'name': 'Czech Republic', 'code': 'CZ'},
      {'name': 'Denmark', 'code': 'DK'},
      {'name': 'Djibouti', 'code': 'DJ'},
      {'name': 'Dominica', 'code': 'DM'},
      {'name': 'Dominican Republic', 'code': 'DO'},
      {'name': 'Ecuador', 'code': 'EC'},
      {'name': 'Egypt', 'code': 'EG'},
      {'name': 'El Salvador', 'code': 'SV'},
      {'name': 'Equatorial Guinea', 'code': 'GQ'},
      {'name': 'Eritrea', 'code': 'ER'},
      {'name': 'Estonia', 'code': 'EE'},
      {'name': 'Ethiopia', 'code': 'ET'},
      {'name': 'Falkland Islands (Malvinas)', 'code': 'FK'},
      {'name': 'Faroe Islands', 'code': 'FO'},
      {'name': 'Fiji', 'code': 'FJ'},
      {'name': 'Finland', 'code': 'FI'},
      {'name': 'France', 'code': 'FR'},
      {'name': 'French Guiana', 'code': 'GF'},
      {'name': 'French Polynesia', 'code': 'PF'},
      {'name': 'French Southern Territories', 'code': 'TF'},
      {'name': 'Gabon', 'code': 'GA'},
      {'name': 'Gambia', 'code': 'GM'},
      {'name': 'Georgia', 'code': 'GE'},
      {'name': 'Germany', 'code': 'DE'},
      {'name': 'Ghana', 'code': 'GH'},
      {'name': 'Gibraltar', 'code': 'GI'},
      {'name': 'Greece', 'code': 'GR'},
      {'name': 'Greenland', 'code': 'GL'},
      {'name': 'Grenada', 'code': 'GD'},
      {'name': 'Guadeloupe', 'code': 'GP'},
      {'name': 'Guam', 'code': 'GU'},
      {'name': 'Guatemala', 'code': 'GT'},
      {'name': 'Guernsey', 'code': 'GG'},
      {'name': 'Guinea', 'code': 'GN'},
      {'name': 'Guinea-Bissau', 'code': 'GW'},
      {'name': 'Guyana', 'code': 'GY'},
      {'name': 'Haiti', 'code': 'HT'},
      {'name': 'Heard Island and Mcdonald Islands', 'code': 'HM'},
      {'name': 'Holy See (Vatican City State)', 'code': 'VA'},
      {'name': 'Honduras', 'code': 'HN'},
      {'name': 'Hong Kong', 'code': 'HK'},
      {'name': 'Hungary', 'code': 'HU'},
      {'name': 'Iceland', 'code': 'IS'},
      {'name': 'India', 'code': 'IN'},
      {'name': 'Indonesia', 'code': 'ID'},
      {'name': 'Iran, Islamic Republic Of', 'code': 'IR'},
      {'name': 'Iraq', 'code': 'IQ'},
      {'name': 'Ireland', 'code': 'IE'},
      {'name': 'Isle of Man', 'code': 'IM'},
      {'name': 'Israel', 'code': 'IL'},
      {'name': 'Italy', 'code': 'IT'},
      {'name': 'Jamaica', 'code': 'JM'},
      {'name': 'Japan', 'code': 'JP'},
      {'name': 'Jersey', 'code': 'JE'},
      {'name': 'Jordan', 'code': 'JO'},
      {'name': 'Kazakhstan', 'code': 'KZ'},
      {'name': 'Kenya', 'code': 'KE'},
      {'name': 'Kiribati', 'code': 'KI'},
      {'name': 'Korea, Democratic People\'S Republic of', 'code': 'KP'},
      {'name': 'Korea, Republic of', 'code': 'KR'},
      {'name': 'Kuwait', 'code': 'KW'},
      {'name': 'Kyrgyzstan', 'code': 'KG'},
      {'name': 'Lao People\'S Democratic Republic', 'code': 'LA'},
      {'name': 'Latvia', 'code': 'LV'},
      {'name': 'Lebanon', 'code': 'LB'},
      {'name': 'Lesotho', 'code': 'LS'},
      {'name': 'Liberia', 'code': 'LR'},
      {'name': 'Libyan Arab Jamahiriya', 'code': 'LY'},
      {'name': 'Liechtenstein', 'code': 'LI'},
      {'name': 'Lithuania', 'code': 'LT'},
      {'name': 'Luxembourg', 'code': 'LU'},
      {'name': 'Macao', 'code': 'MO'},
      {'name': 'Macedonia, The Former Yugoslav Republic of', 'code': 'MK'},
      {'name': 'Madagascar', 'code': 'MG'},
      {'name': 'Malawi', 'code': 'MW'},
      {'name': 'Malaysia', 'code': 'MY'},
      {'name': 'Maldives', 'code': 'MV'},
      {'name': 'Mali', 'code': 'ML'},
      {'name': 'Malta', 'code': 'MT'},
      {'name': 'Marshall Islands', 'code': 'MH'},
      {'name': 'Martinique', 'code': 'MQ'},
      {'name': 'Mauritania', 'code': 'MR'},
      {'name': 'Mauritius', 'code': 'MU'},
      {'name': 'Mayotte', 'code': 'YT'},
      {'name': 'Mexico', 'code': 'MX'},
      {'name': 'Micronesia, Federated States of', 'code': 'FM'},
      {'name': 'Moldova, Republic of', 'code': 'MD'},
      {'name': 'Monaco', 'code': 'MC'},
      {'name': 'Mongolia', 'code': 'MN'},
      {'name': 'Montserrat', 'code': 'MS'},
      {'name': 'Morocco', 'code': 'MA'},
      {'name': 'Mozambique', 'code': 'MZ'},
      {'name': 'Myanmar', 'code': 'MM'},
      {'name': 'Namibia', 'code': 'NA'},
      {'name': 'Nauru', 'code': 'NR'},
      {'name': 'Nepal', 'code': 'NP'},
      {'name': 'Netherlands', 'code': 'NL'},
      {'name': 'Netherlands Antilles', 'code': 'AN'},
      {'name': 'New Caledonia', 'code': 'NC'},
      {'name': 'New Zealand', 'code': 'NZ'},
      {'name': 'Nicaragua', 'code': 'NI'},
      {'name': 'Niger', 'code': 'NE'},
      {'name': 'Nigeria', 'code': 'NG'},
      {'name': 'Niue', 'code': 'NU'},
      {'name': 'Norfolk Island', 'code': 'NF'},
      {'name': 'Northern Mariana Islands', 'code': 'MP'},
      {'name': 'Norway', 'code': 'NO'},
      {'name': 'Oman', 'code': 'OM'},
      {'name': 'Pakistan', 'code': 'PK'},
      {'name': 'Palau', 'code': 'PW'},
      {'name': 'Palestinian Territory, Occupied', 'code': 'PS'},
      {'name': 'Panama', 'code': 'PA'},
      {'name': 'Papua New Guinea', 'code': 'PG'},
      {'name': 'Paraguay', 'code': 'PY'},
      {'name': 'Peru', 'code': 'PE'},
      {'name': 'Philippines', 'code': 'PH'},
      {'name': 'Pitcairn', 'code': 'PN'},
      {'name': 'Poland', 'code': 'PL'},
      {'name': 'Portugal', 'code': 'PT'},
      {'name': 'Puerto Rico', 'code': 'PR'},
      {'name': 'Qatar', 'code': 'QA'},
      {'name': 'Reunion', 'code': 'RE'},
      {'name': 'Romania', 'code': 'RO'},
      {'name': 'Russian Federation', 'code': 'RU'},
      {'name': 'RWANDA', 'code': 'RW'},
      {'name': 'Saint Helena', 'code': 'SH'},
      {'name': 'Saint Kitts and Nevis', 'code': 'KN'},
      {'name': 'Saint Lucia', 'code': 'LC'},
      {'name': 'Saint Pierre and Miquelon', 'code': 'PM'},
      {'name': 'Saint Vincent and the Grenadines', 'code': 'VC'},
      {'name': 'Samoa', 'code': 'WS'},
      {'name': 'San Marino', 'code': 'SM'},
      {'name': 'Sao Tome and Principe', 'code': 'ST'},
      {'name': 'Saudi Arabia', 'code': 'SA'},
      {'name': 'Senegal', 'code': 'SN'},
      {'name': 'Serbia and Montenegro', 'code': 'CS'},
      {'name': 'Seychelles', 'code': 'SC'},
      {'name': 'Sierra Leone', 'code': 'SL'},
      {'name': 'Singapore', 'code': 'SG'},
      {'name': 'Slovakia', 'code': 'SK'},
      {'name': 'Slovenia', 'code': 'SI'},
      {'name': 'Solomon Islands', 'code': 'SB'},
      {'name': 'Somalia', 'code': 'SO'},
      {'name': 'South Africa', 'code': 'ZA'},
      {'name': 'South Georgia and the South Sandwich Islands', 'code': 'GS'},
      {'name': 'Spain', 'code': 'ES'},
      {'name': 'Sri Lanka', 'code': 'LK'},
      {'name': 'Sudan', 'code': 'SD'},
      {'name': 'Suriname', 'code': 'SR'},
      {'name': 'Svalbard and Jan Mayen', 'code': 'SJ'},
      {'name': 'Swaziland', 'code': 'SZ'},
      {'name': 'Sweden', 'code': 'SE'},
      {'name': 'Switzerland', 'code': 'CH'},
      {'name': 'Syrian Arab Republic', 'code': 'SY'},
      {'name': 'Taiwan, Province of China', 'code': 'TW'},
      {'name': 'Tajikistan', 'code': 'TJ'},
      {'name': 'Tanzania, United Republic of', 'code': 'TZ'},
      {'name': 'Thailand', 'code': 'TH'},
      {'name': 'Timor-Leste', 'code': 'TL'},
      {'name': 'Togo', 'code': 'TG'},
      {'name': 'Tokelau', 'code': 'TK'},
      {'name': 'Tonga', 'code': 'TO'},
      {'name': 'Trinidad and Tobago', 'code': 'TT'},
      {'name': 'Tunisia', 'code': 'TN'},
      {'name': 'Turkey', 'code': 'TR'},
      {'name': 'Turkmenistan', 'code': 'TM'},
      {'name': 'Turks and Caicos Islands', 'code': 'TC'},
      {'name': 'Tuvalu', 'code': 'TV'},
      {'name': 'Uganda', 'code': 'UG'},
      {'name': 'Ukraine', 'code': 'UA'},
      {'name': 'United Arab Emirates', 'code': 'AE'},
      {'name': 'United Kingdom', 'code': 'GB'},
      {'name': 'United States', 'code': 'US'},
      {'name': 'United States Minor Outlying Islands', 'code': 'UM'},
      {'name': 'Uruguay', 'code': 'UY'},
      {'name': 'Uzbekistan', 'code': 'UZ'},
      {'name': 'Vanuatu', 'code': 'VU'},
      {'name': 'Venezuela', 'code': 'VE'},
      {'name': 'Viet Nam', 'code': 'VN'},
      {'name': 'Virgin Islands, British', 'code': 'VG'},
      {'name': 'Virgin Islands, U.S.', 'code': 'VI'},
      {'name': 'Wallis and Futuna', 'code': 'WF'},
      {'name': 'Western Sahara', 'code': 'EH'},
      {'name': 'Yemen', 'code': 'YE'},
      {'name': 'Zambia', 'code': 'ZM'},
      {'name': 'Zimbabwe', 'code': 'ZW'}
    ],

    cities: {

    },

    states: {

    }

  };


  // Person
  // ---------------

  Fluke.prototype.nationality = function() {
    const nationalities = [
      'Afghan',
      'Albanian',
      'Algerian',
      'American',
      'Andorran',
      'Angolan',
      'Antiguans',
      'Argentinean',
      'Armenian',
      'Australian',
      'Austrian',
      'Azerbaijani',
      'Bahamian',
      'Bahraini',
      'Bangladeshi',
      'Barbadian',
      'Barbudans',
      'Batswana',
      'Belarusian',
      'Belgian',
      'Belizean',
      'Beninese',
      'Bhutanese',
      'Bolivian',
      'Bosnian',
      'Brazilian',
      'British',
      'Bruneian',
      'Bulgarian',
      'Burkinabe',
      'Burmese',
      'Burundian',
      'Cambodian',
      'Cameroonian',
      'Canadian',
      'Cape Verdean',
      'Central African',
      'Chadian',
      'Chilean',
      'Chinese',
      'Colombian',
      'Comoran',
      'Congolese',
      'Costa Rican',
      'Croatian',
      'Cuban',
      'Cypriot',
      'Czech',
      'Danish',
      'Djibouti',
      'Dominican',
      'Dutch',
      'East Timorese',
      'Ecuadorean',
      'Egyptian',
      'Emirian',
      'Equatorial Guinean',
      'Eritrean',
      'Estonian',
      'Ethiopian',
      'Fijian',
      'Filipino',
      'Finnish',
      'French',
      'Gabonese',
      'Gambian',
      'Georgian',
      'German',
      'Ghanaian',
      'Greek',
      'Grenadian',
      'Guatemalan',
      'Guinea-Bissauan',
      'Guinean',
      'Guyanese',
      'Haitian',
      'Herzegovinian',
      'Honduran',
      'Hungarian',
      'I-Kiribati',
      'Icelander',
      'Indian',
      'Indonesian',
      'Iranian',
      'Iraqi',
      'Irish',
      'Israeli',
      'Italian',
      'Ivorian',
      'Jamaican',
      'Japanese',
      'Jordanian',
      'Kazakhstani',
      'Kenyan',
      'Kittian and Nevisian',
      'Kuwaiti',
      'Kyrgyz',
      'Laotian',
      'Latvian',
      'Lebanese',
      'Liberian',
      'Libyan',
      'Liechtensteiner',
      'Lithuanian',
      'Luxembourger',
      'Macedonian',
      'Malagasy',
      'Malawian',
      'Malaysian',
      'Maldivan',
      'Malian',
      'Maltese',
      'Marshallese',
      'Mauritanian',
      'Mauritian',
      'Mexican',
      'Micronesian',
      'Moldovan',
      'Monacan',
      'Mongolian',
      'Moroccan',
      'Mosotho',
      'Motswana',
      'Mozambican',
      'Namibian',
      'Nauruan',
      'Nepalese',
      'New Zealander',
      'Nicaraguan',
      'Nigerian',
      'Nigerien',
      'North Korean',
      'Northern Irish',
      'Norwegian',
      'Omani',
      'Pakistani',
      'Palauan',
      'Panamanian',
      'Papua New Guinean',
      'Paraguayan',
      'Peruvian',
      'Polish',
      'Portuguese',
      'Qatari',
      'Romanian',
      'Russian',
      'Rwandan',
      'Saint Lucian',
      'Salvadoran',
      'Samoan',
      'San Marinese',
      'Sao Tomean',
      'Saudi',
      'Scottish',
      'Senegalese',
      'Serbian',
      'Seychellois',
      'Sierra Leonean',
      'Singaporean',
      'Slovakian',
      'Slovenian',
      'Solomon Islander',
      'Somali',
      'South African',
      'South Korean',
      'Spanish',
      'Sri Lankan',
      'Sudanese',
      'Surinamer',
      'Swazi',
      'Swedish',
      'Swiss',
      'Syrian',
      'Taiwanese',
      'Tajik',
      'Tanzanian',
      'Thai',
      'Togolese',
      'Tongan',
      'Trinidadian or Tobagonian',
      'Tunisian',
      'Turkish',
      'Tuvaluan',
      'Ugandan',
      'Ukrainian',
      'Uruguayan',
      'Uzbekistani',
      'Venezuelan',
      'Vietnamese',
      'Welsh',
      'Yemenite',
      'Zambian',
      'Zimbabwean'
    ];

    const n = nationalities[Math.floor(this.random() * nationalities.length)];
    return n;

  };


  // Location
  // -------------


  // JSON
  // -----------


  // Currency
  // -----------

  /** ==> Dollar
   *  Return a word
   *  @param {number}
   *  @param {number}
   *  @throws {Error}
   *  @returns {number}
   */

  Fluke.prototype.dollar = function(min, max) {
    let finAlgorithm = this.random() * (max - min) + min;

    if (arguments.length > 0) {
      return dollarCurr + '' + finAlgorithm.toFixed(2);
    }

    else {
      throw new Error('min and max should be supplied');
    }

  };


  /** ==> Ruble
   *  Return a word
   *  @param {number}
   *  @param {number}
   *  @throws {Error}
   *  @returns {number}
   */

  Fluke.prototype.ruble = function(min, max) {
    let finAlgorithm = this.random() * (max - min) + min;

    if (arguments.length > 0) {
      return russianCurr + '' + finAlgorithm.toFixed(2);
    }

    else {
      throw new Error('min and max should be supplied');
    }

  };

  /** ==> Euro
   *  Return a word
   *  @param {number}
   *  @param {number}
   *  @throws {Error}
   *  @returns {number}
   */

  Fluke.prototype.euro = function(min, max) {
    let finAlgorithm = this.random() * (max - min) + min;

    if (arguments.length > 0) {
      return euroCurr + '' + finAlgorithm.toFixed(2);
    }

    else {
      throw new Error('min and max should be supplied');
    }

  };


  /** ==> British Pound
   *  Return a word
   *  @param {number}
   *  @param {number}
   *  @throws {Error}
   *  @returns {number}
   */

  Fluke.prototype.pound = function(min, max) {
    let finAlgorithm = this.random() * (max - min) + min;

    if (arguments.length > 0) {
      return britishCurr + '' + finAlgorithm.toFixed(2);
    }

    else {
      throw new Error('min and max should be supplied');
    }

  };

  /** ==>  Kuwaiti Dinar
   *  Return a word
   *  @param {number}
   *  @param {number}
   *  @throws {Error}
   *  @returns {number}
   */

  Fluke.prototype.dinar = function(min, max) {
    let finAlgorithm = this.random() * (max - min) + min;

    if (arguments.length > 0) {
      return kuwaitiCurr + '' + finAlgorithm.toFixed(2);
    }

    else {
      throw new Error('min and max should be supplied');
    }

  };

  Fluke.prototype.nasdaq100 = function(min, max) {

    const rawNasdaq =
      'ATVI,ADBE,AKAM,ALXN,GOOG,GOOGL,AMZN,AAL,AMGN,ADI,AAPL,AMAT,ADSK,ADP,BIDU,BBBY,BIIB,BMRN,AVGO,CA,CELG,CERN,CHTR,CHKP,CSCO,CTXS,CTSH,CMCSA,COST,CSX,CTRP,DISCA,DISCK,DISH,DLTR,EBAY,EA,ENDP,EXPE,ESRX,FB,FAST,FISV,GILD,HSIC,ILMN,INCY,INTC,INTU,ISRG,JD,LRC,LBTYA,LBTYK,LVNTA,QVCA,LMCA,LMCK,BATRA,BATRK,LLTC,MAR,MAT,MXIM,MU,MSFT,MDLZ,MNST,MYL,NTAP,NTES,NFLX,NCLH,NVDA,NXPI,ORLY,PCAR,PAYX,PYPL,QCOM,REGN,ROST,SBAC,STX,SIRI,SWKS,SBUX,SRCL,SYMC,TMUS,TSLA,TXN,KHC,PCLN,TSCO,TRIP,FOX,FOXA,ULTA,VRSK,VRTX,VIAB,VOD,WBA,WDC,WFM,XLNX,YHOO';

    const nasdaq = rawNasdaq.split(',');

    function nasdaqList() {
      return nasdaq[randInt(nasdaq.length)];
    }

    function randInt() {
      return Math.floor(Math.random() * 62);
    }

    if (typeof(options) === 'undefined') {
      return nasdaqList();
    }

  };

  // On window
  if (typeof window === 'object' && typeof window.document === 'object') {
    window.Fluke = Fluke;
    window.fluke = new Fluke();

  }

  // Register as an anonymous AMD module
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return Fluke;
    });
  }

  // CommonJS module
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Fluke;
    }
    exports.Fluke = Fluke;
  }


})();
