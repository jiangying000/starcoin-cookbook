"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[5899],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(k,a(a({ref:t},p),{},{components:n})):i.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={},l="Write Move integration test",c={unversionedId:"move/move-test/move-integration-test",id:"move/move-test/move-integration-test",title:"Write Move integration test",description:"Now you know how to write unit test in Move.",source:"@site/docs/03-move/97-move-test/02-move-integration-test.md",sourceDirName:"03-move/97-move-test",slug:"/move/move-test/move-integration-test",permalink:"/starcoin-cookbook/docs/move/move-test/move-integration-test",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/03-move/97-move-test/02-move-integration-test.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Write Move unit test",permalink:"/starcoin-cookbook/docs/move/move-test/move-unit-test"},next:{title:"How to debug Move module and troubleshooting",permalink:"/starcoin-cookbook/docs/move/move-test/how-to-debug"}},p={},u=[{value:"Integration Test Directives",id:"integration-test-directives",level:3},{value:"Directive - init",id:"directive---init",level:4},{value:"Directive - block",id:"directive---block",level:4},{value:"Directive - faucet",id:"directive---faucet",level:4},{value:"Directive - publish",id:"directive---publish",level:4},{value:"Directive - run",id:"directive---run",level:4},{value:"Directive - view",id:"directive---view",level:4},{value:"Directive - print-bytecode",id:"directive---print-bytecode",level:4},{value:"Integration Test Expectation",id:"integration-test-expectation",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"write-move-integration-test"},"Write Move integration test"),(0,o.kt)("p",null,"Now you know how to write unit test in Move.\nBut unit test only suits for simple test scenarios, like mathematical computation.\nFor end-to-end test cases with user interactions, integration test comes to play."),(0,o.kt)("p",null,"Integration test is a feature of mpm."),(0,o.kt)("p",null,"It can simulates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"account initialization."),(0,o.kt)("li",{parentName:"ul"},"block generation."),(0,o.kt)("li",{parentName:"ul"},"module publishing."),(0,o.kt)("li",{parentName:"ul"},"execute scripts or script function.")),(0,o.kt)("p",null,"All actions are wrapped into transactions."),(0,o.kt)("p",null,"All integration test files should be in ",(0,o.kt)("inlineCode",{parentName:"p"},"integration-tests")," dir under the package root path."),(0,o.kt)("p",null,"integration test file contains test directives seperated by empty newlines."),(0,o.kt)("p",null,"directives works like a command line, you provide command name and command arguments,\nand move pacakge manager executes the directives like OS executes cli commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mpm-integration-test\nDatatest-harness for running data-driven tests\n\nUSAGE:\n    mpm integration-test [FLAGS] [OPTIONS] [--] [filter]\n\nFLAGS:\n        --bench                   NO-OP: unsupported option, exists for compatibility with the default test harness\n    -d, --dev                     Compile in 'dev' mode. The 'dev-addresses' and 'dev-dependencies' fields will be used\n                                  if this flag is set. This flag is useful for development of packages that expose named\n                                  addresses that are not set to a specific value\n        --ensure-time             NO-OP: unsupported option, exists for compatibility with the default test harness\n        --exclude-should-panic    NO-OP: unsupported option, exists for compatibility with the default test harness\n        --exact                   Exactly match filters rather than by substring\n        --force                   Force recompilation of all packages\n        --force-run-in-process    NO-OP: unsupported option, exists for compatibility with the default test harness\n        --abi                     Generate ABIs for packages\n        --doc                     Generate documentation for packages\n    -h, --help                    Prints help information\n        --ignored                 List or run ignored tests (always empty: it is currently not possible to mark tests as\n                                  ignored)\n        --include-ignored         NO-OP: unsupported option, exists for compatibility with the default test harness\n        --list                    List all tests\n        --nocapture               NO-OP: unsupported option, exists for compatibility with the default test harness\n    -q, --quiet                   Output minimal information\n        --show-output             NO-OP: unsupported option, exists for compatibility with the default test harness\n        --test                    NO-OP: unsupported option, exists for compatibility with the default test harness\n        --ub                      update test baseline\n    -V, --version                 Prints version information\n    -v                            Print additional diagnostics if available\n\nOPTIONS:\n        --color <color>                  NO-OP: unsupported option, exists for compatibility with the default test\n                                         harness\n        --format <format>                Configure formatting of output: pretty = Print verbose output; terse = Display\n                                         one character per test; (json is unsupported, exists for compatibility with the\n                                         default test harness) [default: Pretty]  [possible values: Pretty, Terse, Json]\n        --install-dir <install-dir>      Installation directory for compiled artifacts. Defaults to current directory\n        --logfile <logfile>              NO-OP: unsupported option, exists for compatibility with the default test\n                                         harness\n    -p, --path <package-path>            Path to a package which the command should be run with respect to [default: .]\n        --report-time <report-time>      NO-OP: unsupported option, exists for compatibility with the default test\n                                         harness\n        --skip <skip>...                 NO-OP: unsupported option, exists for compatibility with the default test\n                                         harness\n        --test-threads <test-threads>    Number of threads used for running tests in parallel [env: RUST_TEST_THREADS=]\n                                         [default: 32]\n\nARGS:\n    <filter>    The FILTER string is tested against the name of all tests, and only those tests whose names contain\n                the filter are run\n")),(0,o.kt)("h3",{id:"integration-test-directives"},"Integration Test Directives"),(0,o.kt)("h4",{id:"directive---init"},"Directive - init"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"task-init 0.1.0\n\nUSAGE:\n    task init [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --block-number <block-number>       block number to read state from. default to latest block number\n        --addresses <named-addresses>...\n    -n, --network <network>                 genesis with the network\n        --public-keys <public-keys>...\n        --rpc <rpc>                         use remote starcoin rpc as initial state\n")),(0,o.kt)("p",null,"Directive ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," can declare the initial state of you integration test.\nYou can either start from a fresh blockchain state by providing arg ",(0,o.kt)("inlineCode",{parentName:"p"},"-n test"),",\nor fork from a remote state snapshot like ",(0,o.kt)("inlineCode",{parentName:"p"},"--rpc http://main.seed.starcoin.org:9850 --block-number 100000"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"--address <named-addresses>")," can be used to declare additional named addressed which will be used in the integration test later."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# init -n dev\n\n//# init -n test --addresses alice=0xAA\n\n//# init -n barnard\n\n//# init --rpc http://main.seed.starcoin.org:9850 --block-number 100000\n\n")),(0,o.kt)("h4",{id:"directive---block"},"Directive - block"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-block 0.1.0\n\nUSAGE:\n    task block [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --author <author>\n        --number <number>\n        --timestamp <timestamp>\n        --uncles <uncles>\n")),(0,o.kt)("p",null,"Directive ",(0,o.kt)("inlineCode",{parentName:"p"},"block")," start a new block."),(0,o.kt)("p",null,"Every directives between this block directive and next block directive are running in this block.\nYou can pass custom ",(0,o.kt)("inlineCode",{parentName:"p"},"--author"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--timestamp"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--uncles")," to fit your need."),(0,o.kt)("p",null,"If no block directive specified, transactions will run on default block whose block number is the next block number of initial state.\nIf you fork from a remote state of block number ",(0,o.kt)("inlineCode",{parentName:"p"},"h"),", then the next block's number is ",(0,o.kt)("inlineCode",{parentName:"p"},"h+1"),"."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# block\n\n//# block --author alice\n\n//# block --timestamp 100000000\n\n//# block --uncles 10\n")),(0,o.kt)("h4",{id:"directive---faucet"},"Directive - faucet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-faucet 0.1.0\n\nUSAGE:\n    task faucet [OPTIONS] --addr <address>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --addr <address>\n        --amount <initial-balance>     [default: 100000000000]\n        --public-key <public-key>\n")),(0,o.kt)("p",null,"Directive ",(0,o.kt)("strong",{parentName:"p"},"faucet")," can create and faucet an address (can be named address like ",(0,o.kt)("inlineCode",{parentName:"p"},"alice"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tom")," or raw address like ",(0,o.kt)("inlineCode",{parentName:"p"},"0x1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x2"),") with some STC of given amount.\nIf the address is a named address, it will auto generate an raw address(and public key) and assign it to the named address.\nIf you has some specific requirements on ",(0,o.kt)("inlineCode",{parentName:"p"},"public-key"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"--public-key")," to specify it."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# faucet --addr bob\n\n//# faucet --addr alice --amount 0\n\n//# faucet --addr tom --amount 10000000000000\n\n")),(0,o.kt)("h4",{id:"directive---publish"},"Directive - publish"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-publish 0.1.0\nStarcoin-specific arguments for the publish command\n\nUSAGE:\n    task publish [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --gas-budget <gas-budget>\n    -k, --public-key <public-key>\n        --syntax <syntax>\n")),(0,o.kt)("p",null,"Directive ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," can publish a module to the blockchain.\nThe module code must follows the directive."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--gas-budget")," specifies the max gas of the transaction.\n",(0,o.kt)("inlineCode",{parentName:"p"},"--syntax")," can be ingored for now."),(0,o.kt)("p",null,"Exmaples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# publish\nmodule alice::Holder {\n    use StarcoinFramework::Signer;\n\n    struct Hold<T> has key, store {\n        x: T\n    }\n\n    public fun hold<T: store>(account: &signer, x: T) {\n        move_to(account, Hold<T>{x})\n    }\n\n    public fun get<T: store>(account: &signer): T\n    acquires Hold {\n        let Hold {x} = move_from<Hold<T>>(Signer::address_of(account));\n        x\n    }\n}\n\n//# publish\nmodule Dummy::DummyModule {}\n\n\n")),(0,o.kt)("h4",{id:"directive---run"},"Directive - run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-run 0.1.0\nStarcoin-specifc arguments for the run command,\n\nUSAGE:\n    task run [FLAGS] [OPTIONS] [--] [NAME]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n    -v, --verbose    print detailed outputs\n\nOPTIONS:\n        --args <args>...\n        --gas-budget <gas-budget>\n    -k, --public-key <public-key>\n        --signers <signers>...\n        --syntax <syntax>\n        --type-args <type-args>...\n\nARGS:\n    <NAME>\n")),(0,o.kt)("p",null,"Directive ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," can execute a script of script function.\nIf it's a script, the script code must follow the directive.\nIf it's a script function, then ",(0,o.kt)("inlineCode",{parentName:"p"},"<NAME>")," should be provided."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--signers")," declare the transaction sender.\n",(0,o.kt)("inlineCode",{parentName:"p"},"--type-args")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--args")," declare type arguments and arguments of the script of script function."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# run --signers alice\nscript {\nuse StarcoinFramework::STC::{STC};\nuse StarcoinFramework::Token;\nuse StarcoinFramework::Account;\nfun main(account: signer) {\n    let coin = Account::withdraw<STC>(&account, 0);\n    Token::destroy_zero(coin);\n}\n}\n\n//# run --signers alice --type-args 0x1::DummyToken::DummyToken 0x1::Account::accept_token\n\n")),(0,o.kt)("h4",{id:"directive---view"},"Directive - view"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-view 0.1.0\n\nUSAGE:\n    task view --address <address> --resource <resource>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --address <address>\n        --resource <resource>\n")),(0,o.kt)("p",null,"Directive ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," can query any resource of any address."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# view --address alice --resource 01::Account::Account\n\n//# view --address StarcoinFramework --resource 0x1::Config::Config<0x1::VMConfig::VMConfig>\n")),(0,o.kt)("h4",{id:"directive---print-bytecode"},"Directive - print-bytecode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-print-bytecode 0.1.0\nTranslates the given Move IR module or script into bytecode, then prints a textual representation of that bytecode\n\nUSAGE:\n    task print-bytecode [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --input <input>    The kind of input: either a script, or a module [default: script]\n")),(0,o.kt)("p",null,"Directive ",(0,o.kt)("inlineCode",{parentName:"p"},"print-bytecode")," can print the bytecode of given module or script."),(0,o.kt)("h3",{id:"integration-test-expectation"},"Integration Test Expectation"),(0,o.kt)("p",null,"Each integration test should have an corresponding expectation file, which contains the expected output of each directives in integration test.\nMove package manager will compare the test result of a integration test with the expectation file.\nIf there are different outputs, then the integration test fails.\nYou can generate the expected file by providing ",(0,o.kt)("inlineCode",{parentName:"p"},"--ub")," argument when running ",(0,o.kt)("inlineCode",{parentName:"p"},"mpm integration-test")," for the first time.\nBut you have to check whether the generated output really is the expected output of your integration test."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd coin-swap\nmpm pacakge build\nmpm integration-test test_coin_swap\n")),(0,o.kt)("p",null,"This's all about integration test of move."))}m.isMDXComponent=!0}}]);