"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[8095],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?i.createElement(k,a(a({ref:n},u),{},{components:t})):i.createElement(k,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8668:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],s={},l=void 0,p={unversionedId:"move/move-test/move-integration-test",id:"move/move-test/move-integration-test",title:"move-integration-test",description:"Move \u96c6\u6210\u6d4b\u8bd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-move/97-move-test/02-move-integration-test.md",sourceDirName:"03-move/97-move-test",slug:"/move/move-test/move-integration-test",permalink:"/starcoin-cookbook/zh/docs/move/move-test/move-integration-test",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/03-move/97-move-test/02-move-integration-test.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"move-unit-test",permalink:"/starcoin-cookbook/zh/docs/move/move-test/move-unit-test"},next:{title:"How to debug Move module and troubleshooting",permalink:"/starcoin-cookbook/zh/docs/move/move-test/how-to-debug"}},u={},c=[{value:"Move \u96c6\u6210\u6d4b\u8bd5",id:"move-\u96c6\u6210\u6d4b\u8bd5",level:2},{value:"\u7f16\u5199 test \u6307\u4ee4",id:"\u7f16\u5199-test-\u6307\u4ee4",level:3},{value:"<code>init</code> \u6307\u4ee4",id:"init-\u6307\u4ee4",level:4},{value:"<code>block</code> \u6307\u4ee4",id:"block-\u6307\u4ee4",level:4},{value:"<code>faucet</code> \u6307\u4ee4",id:"faucet-\u6307\u4ee4",level:4},{value:"<code>publish</code> \u6307\u4ee4",id:"publish-\u6307\u4ee4",level:4},{value:"<code>run</code> \u6307\u4ee4",id:"run-\u6307\u4ee4",level:4},{value:"<code>view</code> \u6307\u4ee4",id:"view-\u6307\u4ee4",level:4},{value:"<code>print-bytecode</code> \u6307\u4ee4",id:"print-bytecode-\u6307\u4ee4",level:4},{value:"\u96c6\u6210\u6d4b\u8bd5\u7684\u671f\u671b\u7ed3\u679c",id:"\u96c6\u6210\u6d4b\u8bd5\u7684\u671f\u671b\u7ed3\u679c",level:3}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"move-\u96c6\u6210\u6d4b\u8bd5"},"Move \u96c6\u6210\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u73b0\u5728\u4f60\u77e5\u9053\u5982\u4f55\u5728Move\u4e2d\u5199\u5355\u5143\u6d4b\u8bd5\u4e86\u3002\u4f46\u662f\u5355\u5143\u6d4b\u8bd5\u53ea\u9002\u5408\u4e8e\u7b80\u5355\u7684\u6d4b\u8bd5\u573a\u666f\uff0c\u5982\u6570\u5b66\u8ba1\u7b97\u3002\u5bf9\u4e8e\u6709\u7528\u6237\u4ea4\u4e92\u7684\u7aef\u5230\u7aef\u6d4b\u8bd5\u6848\u4f8b\uff0c\u96c6\u6210\u6d4b\u8bd5\u5c31\u5f00\u59cb\u53d1\u6325\u4f5c\u7528\u4e86\u3002"),(0,o.kt)("p",null,"\u96c6\u6210\u6d4b\u8bd5\u662f mpm \u7684\u4e00\u4e2a\u529f\u80fd\uff0c\u5b83\u53ef\u4ee5\u6a21\u62df\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8d26\u6237\u521d\u59cb\u5316\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5757\u7684\u751f\u6210\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u5757\u53d1\u5e03\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c\u811a\u672c\u6216\u811a\u672c\u51fd\u6570\u3002")),(0,o.kt)("p",null,"\u6240\u6709\u7684\u52a8\u4f5c\u90fd\u88ab\u5305\u88c5\u6210\u4e8b\u52a1\u3002\u6240\u6709\u7684\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u5e94\u8be5\u5728\u8f6f\u4ef6\u5305\u6839\u8def\u5f84\u4e0b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"integration-tests"),"\u76ee\u5f55\u4e2d\u3002"),(0,o.kt)("p",null,"\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u5305\u542b\u6d4b\u8bd5\u6307\u4ee4\uff0c\u7528\u7a7a\u7684\u6362\u884c\u7b26\u9694\u5f00\u3002\u6307\u4ee4\u7684\u5de5\u4f5c\u65b9\u5f0f\u7c7b\u4f3c\u4e8e\u547d\u4ee4\u884c\uff0c\u4f60\u63d0\u4f9b\u547d\u4ee4\u540d\u79f0\u548c\u547d\u4ee4\u53c2\u6570\u3002\nmpm \u6267\u884c\u6307\u4ee4\uff0c\u5c31\u50cf\u64cd\u4f5c\u7cfb\u7edf\u6267\u884c cli \u547d\u4ee4\u4e00\u6837\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mpm-integration-test\nDatatest-harness for running data-driven tests\n\nUSAGE:\n    mpm integration-test [FLAGS] [OPTIONS] [--] [filter]\n\nFLAGS:\n        --bench                   NO-OP: unsupported option, exists for compatibility with the default test harness\n    -d, --dev                     Compile in 'dev' mode. The 'dev-addresses' and 'dev-dependencies' fields will be used\n                                  if this flag is set. This flag is useful for development of packages that expose named\n                                  addresses that are not set to a specific value\n        --ensure-time             NO-OP: unsupported option, exists for compatibility with the default test harness\n        --exclude-should-panic    NO-OP: unsupported option, exists for compatibility with the default test harness\n        --exact                   Exactly match filters rather than by substring\n        --force                   Force recompilation of all packages\n        --force-run-in-process    NO-OP: unsupported option, exists for compatibility with the default test harness\n        --abi                     Generate ABIs for packages\n        --doc                     Generate documentation for packages\n    -h, --help                    Prints help information\n        --ignored                 List or run ignored tests (always empty: it is currently not possible to mark tests as\n                                  ignored)\n        --include-ignored         NO-OP: unsupported option, exists for compatibility with the default test harness\n        --list                    List all tests\n        --nocapture               NO-OP: unsupported option, exists for compatibility with the default test harness\n    -q, --quiet                   Output minimal information\n        --show-output             NO-OP: unsupported option, exists for compatibility with the default test harness\n        --test                    NO-OP: unsupported option, exists for compatibility with the default test harness\n        --ub                      update test baseline\n    -V, --version                 Prints version information\n    -v                            Print additional diagnostics if available\n\nOPTIONS:\n        --color <color>                  NO-OP: unsupported option, exists for compatibility with the default test\n                                         harness\n        --format <format>                Configure formatting of output: pretty = Print verbose output; terse = Display\n                                         one character per test; (json is unsupported, exists for compatibility with the\n                                         default test harness) [default: Pretty]  [possible values: Pretty, Terse, Json]\n        --install-dir <install-dir>      Installation directory for compiled artifacts. Defaults to current directory\n        --logfile <logfile>              NO-OP: unsupported option, exists for compatibility with the default test\n                                         harness\n    -p, --path <package-path>            Path to a package which the command should be run with respect to [default: .]\n        --report-time <report-time>      NO-OP: unsupported option, exists for compatibility with the default test\n                                         harness\n        --skip <skip>...                 NO-OP: unsupported option, exists for compatibility with the default test\n                                         harness\n        --test-threads <test-threads>    Number of threads used for running tests in parallel [env: RUST_TEST_THREADS=]\n                                         [default: 32]\n\nARGS:\n    <filter>    The FILTER string is tested against the name of all tests, and only those tests whose names contain\n                the filter are run\n")),(0,o.kt)("h3",{id:"\u7f16\u5199-test-\u6307\u4ee4"},"\u7f16\u5199 test \u6307\u4ee4"),(0,o.kt)("h4",{id:"init-\u6307\u4ee4"},(0,o.kt)("inlineCode",{parentName:"h4"},"init")," \u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"task-init 0.1.0\n\nUSAGE:\n    task init [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --block-number <block-number>       block number to read state from. default to latest block number\n        --addresses <named-addresses>...\n    -n, --network <network>                 genesis with the network\n        --public-keys <public-keys>...\n        --rpc <rpc>                         use remote starcoin rpc as initial state\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"init")," \u6307\u4ee4\u7528\u6765\u58f0\u660e\u67d0\u4e2a\u96c6\u6210\u6d4b\u8bd5\u7684\u7684\u521d\u59cb\u72b6\u6001\u3002"),(0,o.kt)("p",null,"You can either start from a fresh blockchain state by providing arg ",(0,o.kt)("inlineCode",{parentName:"p"},"-n test"),",\nor fork from a remote state snapshot like ",(0,o.kt)("inlineCode",{parentName:"p"},"--rpc http://main.seed.starcoin.org:9850 --block-number 100000"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"--address <named-addresses>")," can be used to declare additional named addressed which will be used in the integration test later."),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u7533\u660e\u6d4b\u8bd5\u4ece\u4e00\u4e2a\u521b\u4e16\u5757\u5f00\u59cb\uff08\u901a\u8fc7\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"-n test")," \uff09\uff0c\n\u6216\u8005\u4ece\u4e00\u4e2a\u8fdc\u7a0b\u72b6\u6001\u5feb\u7167\u5f00\u59cb\uff0c\u6bd4\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"--rpc http://main.seed.starcoin.org:9850 --block-number 100000"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--address <named-addresses>")," \u53ef\u4ee5\u7528\u6765\u58f0\u660e\u989d\u5916\u7684\u547d\u540d\u5730\u5740\uff0c\u8fd9\u5c06\u5728\u540e\u9762\u7684\u96c6\u6210\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u4f8b\u5b50:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# init -n dev\n\n//# init -n test --addresses alice=0xAA\n\n//# init -n barnard\n\n//# init --rpc http://main.seed.starcoin.org:9850 --block-number 100000\n\n")),(0,o.kt)("h4",{id:"block-\u6307\u4ee4"},(0,o.kt)("inlineCode",{parentName:"h4"},"block")," \u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-block 0.1.0\n\nUSAGE:\n    task block [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --author <author>\n        --number <number>\n        --timestamp <timestamp>\n        --uncles <uncles>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"block")," \u6307\u4ee4\u7533\u660e\u4e00\u4e2a\u65b0\u533a\u5757\u4ea7\u751f\u3002"),(0,o.kt)("p",null,"Every directives between this block directive and next block directive are running in this block.\nYou can pass custom ",(0,o.kt)("inlineCode",{parentName:"p"},"--author"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--timestamp"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--uncles")," to fit your need."),(0,o.kt)("p",null,"If no block directive specified, transactions will run on default block whose block number is the next block number of initial state.\nIf you fork from a remote state of block number ",(0,o.kt)("inlineCode",{parentName:"p"},"h"),", then the next block's number is ",(0,o.kt)("inlineCode",{parentName:"p"},"h+1"),"."),(0,o.kt)("p",null,"\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"block")," \u6307\u4ee4\u548c\u4e0b\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"block")," \u6307\u4ee4\u4e4b\u95f4\u7684\u5176\u4ed6\u6307\u4ee4\u90fd\u5728\u8fd9\u4e2a\u533a\u5757\u4e2d\u8fd0\u884c\u3002\n\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49 \u533a\u5757\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"--author"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"--timestamp"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"--uncles"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"block")," \u6307\u4ee4\uff0c\u4e8b\u52a1\u5c06\u5728\u9ed8\u8ba4\u7684\u5757\u4e0a\u8fd0\u884c\uff0c\u5176\u5757\u53f7\u662f\u521d\u59cb\u72b6\u6001\u7684\u4e0b\u4e00\u4e2a\u5757\u53f7\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u521d\u59cb\u72b6\u6001\u662f\u67d0\u4e2a\u8fdc\u7a0b\u72b6\u6001\uff0c\u5176\u6700\u65b0\u533a\u5757\u9ad8\u5ea6\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"h"),"\uff0c\u90a3\u4e48\u6d4b\u8bd5\u9ed8\u8ba4\u4f7f\u7528\u7684\u533a\u5757\u9ad8\u5ea6\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"h+1"),"\u3002"),(0,o.kt)("p",null,"\u4f8b\u5b50:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# block\n\n//# block --author alice\n\n//# block --timestamp 100000000\n\n//# block --uncles 10\n")),(0,o.kt)("h4",{id:"faucet-\u6307\u4ee4"},(0,o.kt)("inlineCode",{parentName:"h4"},"faucet")," \u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-faucet 0.1.0\n\nUSAGE:\n    task faucet [OPTIONS] --addr <address>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --addr <address>\n        --amount <initial-balance>     [default: 100000000000]\n        --public-key <public-key>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"faucet")," \u6307\u4ee4\u53ef\u4ee5\u521b\u5efa\u5730\u5740\uff0c\u7ed9\u5730\u5740\u5145\u94b1\u3002\n\u5730\u5740\u53ef\u4ee5\u662f\u547d\u540d\u5730\u5740(named address)\uff0c\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"alice"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tom"),"\uff0c \u6216\u8005\u662f\u5b57\u9762\u5730\u5740(raw address)\uff0c\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"0x1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0x2"),"\u3002\n\u5982\u679c\u662f\u547d\u540d\u5730\u5740\uff0c\u5b83\u4f1a\u4e3a\u8be5\u5730\u5740\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u5b57\u9762\u5730\u5740\u4ee5\u53ca\u5bf9\u5e94\u7684\u516c\u94a5\u3002\n\u5982\u679c\u4f60\u60f3\u6307\u5b9a\u5177\u4f53\u7684\u67d0\u4e2a\u516c\u94a5\uff0c\u53ef\u4ee5\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--public-key")," \u53c2\u6570\u3002"),(0,o.kt)("p",null,"\u4f8b\u5b50:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# faucet --addr bob\n\n//# faucet --addr alice --amount 0\n\n//# faucet --addr tom --amount 10000000000000\n\n")),(0,o.kt)("h4",{id:"publish-\u6307\u4ee4"},(0,o.kt)("inlineCode",{parentName:"h4"},"publish")," \u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-publish 0.1.0\nStarcoin-specific arguments for the publish command\n\nUSAGE:\n    task publish [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --gas-budget <gas-budget>\n    -k, --public-key <public-key>\n        --syntax <syntax>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pulish")," \u6307\u4ee4\u53ef\u4ee5\u5c06\u67d0\u4e2a\u6a21\u5757\u53d1\u5e03\u5230\u94fe\u4e0a\u3002\n\u6a21\u5757\u4ee3\u7801\u5fc5\u987b\u8ddf\u5728\u8be5\u6307\u4ee4\u540e\u9762\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--gas-budget")," \u6307\u5b9a\u4e86\u8be5\u4ea4\u6613\u7684\u6700\u5927gas\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--syntax")," \u6682\u65f6\u8fd8\u6ca1\u6709\u7528\u5230\uff0c\u53ef\u4ee5\u5ffd\u7565\u3002")),(0,o.kt)("p",null,"\u4f8b\u5b50:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# publish\nmodule alice::Holder {\n    use StarcoinFramework::Signer;\n\n    struct Hold<T> has key, store {\n        x: T\n    }\n\n    public fun hold<T: store>(account: &signer, x: T) {\n        move_to(account, Hold<T>{x})\n    }\n\n    public fun get<T: store>(account: &signer): T\n    acquires Hold {\n        let Hold {x} = move_from<Hold<T>>(Signer::address_of(account));\n        x\n    }\n}\n\n//# publish\nmodule Dummy::DummyModule {}\n\n\n")),(0,o.kt)("h4",{id:"run-\u6307\u4ee4"},(0,o.kt)("inlineCode",{parentName:"h4"},"run")," \u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-run 0.1.0\nStarcoin-specifc arguments for the run command,\n\nUSAGE:\n    task run [FLAGS] [OPTIONS] [--] [NAME]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n    -v, --verbose    print detailed outputs\n\nOPTIONS:\n        --args <args>...\n        --gas-budget <gas-budget>\n    -k, --public-key <public-key>\n        --signers <signers>...\n        --syntax <syntax>\n        --type-args <type-args>...\n\nARGS:\n    <NAME>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"run")," \u6307\u4ee4\u53ef\u4ee5\u6267\u884c\u4e00\u4e2a\u811a\u672c\u6216\u8005\u811a\u672c\u51fd\u6570\u3002\n\u5982\u679c\u662f\u811a\u672c\uff0c\u90a3\u4e48\u811a\u672c\u4ee3\u7801\u5fc5\u987b\u8ddf\u5728\u8be5\u6307\u4ee4\u540e\u9762\u3002\n\u5982\u679c\u662f\u811a\u672c\u51fd\u6570\uff0c\u90a3\u4e48\u51fd\u6570\u540d\u5b57 ",(0,o.kt)("inlineCode",{parentName:"p"},"<NAME>")," \u5fc5\u987b\u63d0\u4f9b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--signers")," \u58f0\u660e\u4ea4\u6613\u7684\u53d1\u8d77\u8005\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--type-args")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"--args")," \u58f0\u660e\u4ea4\u6613\u8981\u6267\u884c\u7684\u51fd\u6570\u7684\u7c7b\u578b\u53c2\u6570\u548c\u53c2\u6570\u3002")),(0,o.kt)("p",null,"\u4f8b\u5b50:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# run --signers alice\nscript {\nuse StarcoinFramework::STC::{STC};\nuse StarcoinFramework::Token;\nuse StarcoinFramework::Account;\nfun main(account: signer) {\n    let coin = Account::withdraw<STC>(&account, 0);\n    Token::destroy_zero(coin);\n}\n}\n\n//# run --signers alice --type-args 0x1::DummyToken::DummyToken 0x1::Account::accept_token\n\n")),(0,o.kt)("h4",{id:"view-\u6307\u4ee4"},(0,o.kt)("inlineCode",{parentName:"h4"},"view")," \u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-view 0.1.0\n\nUSAGE:\n    task view --address <address> --resource <resource>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --address <address>\n        --resource <resource>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"view")," \u6307\u4ee4\u53ef\u4ee5\u67e5\u8be2\u67d0\u4e2a\u5730\u5740\u4e0b\u7684\u67d0\u4e2a\u8d44\u6e90\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u4f8b\u5b50:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//# view --address alice --resource 01::Account::Account\n\n//# view --address StarcoinFramework --resource 0x1::Config::Config<0x1::VMConfig::VMConfig>\n")),(0,o.kt)("h4",{id:"print-bytecode-\u6307\u4ee4"},(0,o.kt)("inlineCode",{parentName:"h4"},"print-bytecode")," \u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"task-print-bytecode 0.1.0\nTranslates the given Move IR module or script into bytecode, then prints a textual representation of that bytecode\n\nUSAGE:\n    task print-bytecode [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n        --input <input>    The kind of input: either a script, or a module [default: script]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"print-bytecode")," \u6307\u4ee4\u53ef\u4ee5\u6253\u5370\u7ed9\u5b9a\u7684\u6a21\u5757\u6216\u8005\u811a\u672c\u7684\u5b57\u8282\u7801\u3002"),(0,o.kt)("h3",{id:"\u96c6\u6210\u6d4b\u8bd5\u7684\u671f\u671b\u7ed3\u679c"},"\u96c6\u6210\u6d4b\u8bd5\u7684\u671f\u671b\u7ed3\u679c"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u96c6\u6210\u6d4b\u8bd5\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a\u76f8\u5e94\u7684\u671f\u671b\u6587\u4ef6\uff0c\u5b83\u5305\u542b\u4e86\u96c6\u6210\u6d4b\u8bd5\u4e2d\u6bcf\u4e2a\u6307\u4ee4\u7684\u9884\u671f\u8f93\u51fa\u3002\nmpm \u5c06\u6bd4\u8f83\u96c6\u6210\u6d4b\u8bd5\u7684\u6d4b\u8bd5\u7ed3\u679c\u548c\u671f\u671b\u6587\u4ef6\u3002\n\u5982\u679c\u4e24\u8005\u4e0d\u540c\uff0c\u90a3\u4e48\u8be5\u96c6\u6210\u6d4b\u8bd5\u5c31\u4f1a\u5931\u8d25\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"mpm integration-test"),"\u65f6\u63d0\u4f9b",(0,o.kt)("inlineCode",{parentName:"p"},"--ub"),"\u53c2\u6570\u6765\u751f\u6210\u671f\u671b\u6587\u4ef6\u3002\n\u4f46\u4f60\u5fc5\u987b\u68c0\u67e5\u751f\u6210\u7684\u8f93\u51fa\u662f\u5426\u771f\u7684\u662f\u4f60\u7684\u96c6\u6210\u6d4b\u8bd5\u7684\u9884\u671f\u8f93\u51fa\u3002"),(0,o.kt)("p",null,"\u4f8b\u5b50:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd coin-swap\nmpm pacakge build\nmpm integration-test test_coin_swap\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u96c6\u6210\u6d4b\u8bd5\u7684\u7528\u6cd5\uff0c\u5982\u6709\u7591\u95ee\uff0c\u6b22\u8fce\u5728 starcoin \u7684 discord \u8bba\u575b\u63d0\u51fa\u3002"))}m.isMDXComponent=!0}}]);