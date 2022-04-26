"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[5152],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(t),p=r,m=l["".concat(i,".").concat(p)]||l[p]||k[p]||s;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=l;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<s;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},6637:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return k}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),o=["components"],c={},i="How to debug Move module and troubleshooting",u={unversionedId:"move/move-test/how-to-debug",id:"move/move-test/how-to-debug",title:"How to debug Move module and troubleshooting",description:"There are two test methods for move, unit test and spec test.",source:"@site/docs/03-move/97-move-test/03-how-to-debug.md",sourceDirName:"03-move/97-move-test",slug:"/move/move-test/how-to-debug",permalink:"/starcoin-cookbook/zh/docs/move/move-test/how-to-debug",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/03-move/97-move-test/03-how-to-debug.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"move-integration-test",permalink:"/starcoin-cookbook/zh/docs/move/move-test/move-integration-test"},next:{title:"Move VM, Bytecode, and Disassembler",permalink:"/starcoin-cookbook/zh/docs/move/move-test/disassembler"}},d={},k=[{value:"Simple Example",id:"simple-example",level:3},{value:"Use the mpm command",id:"use-the-mpm-command",level:4},{value:"Go to the folder and edit mycake.move",id:"go-to-the-folder-and-edit-mycakemove",level:4},{value:"Edit Move.toml",id:"edit-movetoml",level:4},{value:"Unit Test Debug",id:"unit-test-debug",level:3},{value:"add unit test",id:"add-unit-test",level:4},{value:"execute test command",id:"execute-test-command",level:4},{value:"get test results",id:"get-test-results",level:4},{value:"Rerun unit test",id:"rerun-unit-test",level:4},{value:"get test results",id:"get-test-results-1",level:4},{value:"Spectest  Debug",id:"spectest--debug",level:3},{value:"Create a new spectest directory and add mycake_test.move",id:"create-a-new-spectest-directory-and-add-mycake_testmove",level:4},{value:"Run Spectest",id:"run-spectest",level:4},{value:"Analyse Problem",id:"analyse-problem",level:4},{value:"Execution update test baseline",id:"execution-update-test-baseline",level:4},{value:"Correct Code",id:"correct-code",level:3},{value:"Move.toml",id:"movetoml",level:4},{value:"mycake.move",id:"mycakemove",level:4},{value:"mycake_test.move",id:"mycake_testmove",level:4}],l={toc:k};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-debug-move-module-and-troubleshooting"},"How to debug Move module and troubleshooting"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"There are two test methods for move, unit test and spec test.",(0,s.kt)("br",{parentName:"p"}),"\n","Using the two test methods separately can cover almost 90% of the usage scenarios.",(0,s.kt)("br",{parentName:"p"}),"\n","We can usually test some functional modules in unit tests as simple verification.",(0,s.kt)("br",{parentName:"p"}),"\n","However, many test scenarios require that we must initiate transactions on the block to debug the correctness of the module, and unit testing cannot meet these requirements.",(0,s.kt)("br",{parentName:"p"}),"\n","So we must use more powerful canonical tests to simulate transactions in real blocks to cover most use cases and make your code more robust.  ")),(0,s.kt)("h3",{id:"simple-example"},"Simple Example"),(0,s.kt)("p",null,"Let's take an example, this is a very simple Token module",(0,s.kt)("br",{parentName:"p"}),"\n","I will leave some small errors in it to demonstrate the whole debug process",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"You can use this test address"),"  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"address:0xf2aa2eae4ceaae88b308fc904975e4ae  \npublic_key:0x98826ab91a9a5d85dec536418090aa6342991bc8f947613721c8165e7102b132  \nprivate_key:0xa5ead1fb25114b335ad21a07ed5cee8cecba8763309ec78656e7c4ccaf5735e7\n")),(0,s.kt)("h4",{id:"use-the-mpm-command"},"Use the mpm command"),(0,s.kt)("p",null,"Create a project"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mpm package new MyCake\n")),(0,s.kt)("h4",{id:"go-to-the-folder-and-edit-mycakemove"},"Go to the folder and edit mycake.move"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cd MyCake\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"vi sources/mycake.move\n")),(0,s.kt)("p",null,"fill in"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"address Chef{\n    module Cake{\n        use StarcoinFramework::Signer;\n        use StarcoinFramework::Token;\n        use StarcoinFramework::Account;\n\n        struct Cake has copy, drop, store { }\n\n        public fun admin():address{\n            @Chef\n        }\n\n        public fun init(account :&signer){\n            assert!( admin() == Signer::address_of( account ) , 10000);\n            Token::register_token<Cake>( account, 9 );\n        }\n\n        public fun make_cake( account: &signer , amount : u128): Token::Token<Cake> {\n            assert!( admin() == Signer::address_of( account ) , 10000);\n            Token::mint<Cake>( account , amount  )\n        }\n\n        public fun destroy_cake( account: &signer , cake: Token::Token<Cake>) {\n            assert!( admin() == Signer::address_of( account ) , 10000);\n            Token::burn<Cake>( account , cake  );\n        }\n\n        public fun send_cake( _to :address , cake: Token::Token<Cake> ){\n            Account::deposit<Cake>(@Chef, cake);\n        }\n\n        public fun add (x:u128, y:u128 ):u128{\n            x - y\n        }\n\n    }\n}\n\n")),(0,s.kt)("h4",{id:"edit-movetoml"},"Edit Move.toml"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"vi Move.toml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'[package]\nname = "MyCake"\nversion = "0.0.0"\n\n[addresses]\nChef = "0xf2aa2eae4ceaae88b308fc904975e4ae"\n\n[dependencies]\nStarcoinFramework = { git = "https://github.com/starcoinorg/starcoin-framework.git", rev = "01c84198819310620f2417413c3c800df8292ae5" }\n')),(0,s.kt)("h3",{id:"unit-test-debug"},"Unit Test Debug"),(0,s.kt)("p",null,"After you have written some move code, you need to unit test first to ensure that your code is correct in the details",(0,s.kt)("br",{parentName:"p"}),"\n","Unit testing is generally used to test the correctness of certain functions or functional modules  "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Let's test the return value of the add function")),(0,s.kt)("h4",{id:"add-unit-test"},"add unit test"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"address Chef{\n    module Cake{\n        use StarcoinFramework::Signer;\n        use StarcoinFramework::Token;\n        use StarcoinFramework::Account;\n\n        struct Cake has copy, drop, store { }\n\n        public fun admin():address{\n            @Chef\n        }\n\n        public fun init(account :&signer){\n            assert!( admin() == Signer::address_of( account ) , 10000);\n            Token::register_token<Cake>( account, 9 );\n        }\n\n        public fun make_cake( account: &signer , amount : u128): Token::Token<Cake> {\n            assert!( admin() == Signer::address_of( account ) , 10000);\n            Token::mint<Cake>( account , amount  )\n        }\n\n        public fun destroy_cake( account: &signer , cake: Token::Token<Cake>) {\n            assert!( admin() == Signer::address_of( account ) , 10000);\n            Token::burn<Cake>( account , cake  );\n        }\n\n        public fun send_cake( _to :address , cake: Token::Token<Cake> ){\n            Account::deposit<Cake>(@Chef, cake);\n        }\n\n        public fun add (x:u128, y:u128 ):u128{\n            x - y\n        }\n\n        #[test]\n        public fun add_test(){\n            assert!( add(10 , 1) == 11, 101);\n        }\n    }\n}\n\n")),(0,s.kt)("h4",{id:"execute-test-command"},"execute test command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mpm package test\n")),(0,s.kt)("h4",{id:"get-test-results"},"get test results"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"BUILDING UnitTest\nBUILDING StarcoinFramework\nBUILDING MyCake\nRunning Move unit tests\n[ FAIL    ] 0xf2aa2eae4ceaae88b308fc904975e4ae::Cake::add_test\n\nTest failures:\n\nFailures in 0xf2aa2eae4ceaae88b308fc904975e4ae::Cake:\n\n\u250c\u2500\u2500 add_test \u2500\u2500\u2500\u2500\u2500\u2500\n\u2502 error[E11001]: test failure\n\u2502    \u250c\u2500 ./sources/mycake.move:38:13\n\u2502    \u2502\n\u2502 37 \u2502         public fun add_test(){\n\u2502    \u2502                    -------- In this function in 0xf2aa2eae4ceaae88b308fc904975e4ae::Cake\n\u2502 38 \u2502             assert!( add(10 , 1) == 11, 101);\n\u2502    \u2502             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Test was not expected to abort but it aborted with 101 here\n\u2502 \n\u2502 \n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nTest result: FAILED. Total tests: 1; passed: 0; failed: 1\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"We can see that the result of the add function is not what we expected"),(0,s.kt)("br",{parentName:"p"}),"\n","Let's check the add function, we can see that the internal implementation of the add function is incorrect",(0,s.kt)("br",{parentName:"p"}),"\n","Fix it"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    public fun add (x:u128, y:u128 ):u128{\n        x + y\n    }\n")),(0,s.kt)("h4",{id:"rerun-unit-test"},"Rerun unit test"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mpm package test\n")),(0,s.kt)("h4",{id:"get-test-results-1"},"get test results"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"CACHED UnitTest\nCACHED StarcoinFramework\nBUILDING MyCake\nRunning Move unit tests\n[ PASS    ] 0xf2aa2eae4ceaae88b308fc904975e4ae::Cake::add_test\nTest result: OK. Total tests: 1; passed: 1; failed: 0\n")),(0,s.kt)("p",null,"Congratulations! The test has passed, you can find the error of the algorithm this way!"),(0,s.kt)("p",null,"You can print certain values in unit tests, and you can also call functions in modules, but keep in mind that unit tests are very limited, and if you need a signature, you can use spectest  "),(0,s.kt)("h3",{id:"spectest--debug"},"Spectest  Debug"),(0,s.kt)("p",null,"Unit testing can only meet the needs of a small range of tests.",(0,s.kt)("br",{parentName:"p"}),"\n","More often, we want to simulate the execution of the code on the block during the testing phase,",(0,s.kt)("br",{parentName:"p"}),"\n","because many problems occur after the block is executed.   "),(0,s.kt)("p",null,"At this time, spectest is the best.     "),(0,s.kt)("h4",{id:"create-a-new-spectest-directory-and-add-mycake_testmove"},"Create a new spectest directory and add mycake_test.move"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mkdir spectests\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"vi spectests/mycake.move\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"//# init -n test --public-keys Chef=0x98826ab91a9a5d85dec536418090aa6342991bc8f947613721c8165e7102b132 \n\n//# faucet --addr Chef --amount 10000000000000000\n\n//# faucet --addr guest --amount 10000000000000000\n\n//# run --signers Chef\nscript {\n    use Chef::Cake;\n    fun init(signer: signer) {\n        Cake::init(&signer);\n    }\n}\n// check: EXECUTED\n\n//# run --signers Chef\nscript {\n    use StarcoinFramework::Signer;\n    use StarcoinFramework::Account;\n    use Chef::Cake;\n    fun make_cake(signer: signer) {\n        let cake = Cake::make_cake(&signer , 1 * 1000 * 1000 * 1000);\n        Account::deposit<Cake::Cake>( Signer::address_of(&signer) , cake );\n        assert!( Account::balance<Cake::Cake>(@Chef) == 1 * 1000 * 1000 * 1000 , 1001);\n    }\n}\n// check: EXECUTED\n\n//# run --signers Chef\nscript {\n    use Chef::Cake;\n    fun destroy_cake(signer: signer) {\n        let cake = Cake::make_cake(&signer , 1 * 1000 * 1000 * 1000);\n        Cake::destroy_cake(&signer, cake);\n    }\n}\n// check: EXECUTED\n\n//# run --signers Chef\nscript {\n    use StarcoinFramework::Account;\n    use Chef::Cake;\n    fun send_cake(signer: signer) {\n        let cake = Cake::make_cake(&signer , 1 * 1000 * 1000 * 1000);\n        Cake::send_cake(@guest, cake);\n        assert!( Account::balance<Cake::Cake>(@guest) == 1 * 1000 * 1000 * 1000 , 1001);\n    }\n}\n// check: EXECUTED\n")),(0,s.kt)("h4",{id:"run-spectest"},"Run Spectest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mpm spectest\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The following will be output on the command line"),(0,s.kt)("br",{parentName:"p"}),"\n","We can see that most of the tests are as we expected",(0,s.kt)("br",{parentName:"p"}),"\n","But the result of the last test is wrong",(0,s.kt)("br",{parentName:"p"}),"\n","We need to examine the code used by the test and the logic behind it  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'BUILDING StarcoinFramework\nBUILDING MyCake\n\nrunning 1 tests\n\ntest transactional-test::mycake_test.move ... FAILED\nError: Expected errors differ from actual errors:\nprocessed 7 tasks\n\ntask 3 \'run\'. lines 7-14:\n{\n  "gas_used": 97115,\n  "status": {\n    "Keep": "Executed"\n  }\n}\n\ntask 4 \'run\'. lines 16-26:\n{\n  "gas_used": 128354,\n  "status": {\n    "Keep": "Executed"\n  }\n}\n\ntask 5 \'run\'. lines 28-36:\n{\n  "gas_used": 90747,\n  "status": {\n    "Keep": "Executed"\n  }\n}\n\ntask 6 \'run\'. lines 38-48:\n{\n  "gas_used": 90471,\n  "status": {\n    "Keep": {\n      "MoveAbort": [\n        "Script",\n        1001\n      ]\n    }\n  }\n}\n\n\n\nfailures:\n    transactional-test::mycake_test.move\n\ntest result: FAILED. 0 passed; 1 failed; 0 filtered out\n')),(0,s.kt)("h4",{id:"analyse-problem"},"Analyse Problem"),(0,s.kt)("p",null,"First look at the test code",(0,s.kt)("br",{parentName:"p"}),"\n","We made some cakes and wanted to give them to the guest, but after send_cake, the cake did not appear in the guest's account "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"//# run --signers Chef\nscript {\n    use StarcoinFramework::Account;\n    use Chef::Cake;\n    fun send_cake(signer: signer) {\n        let cake = Cake::make_cake(&signer , 1 * 1000 * 1000 * 1000);\n        Cake::send_cake(@guest, cake);\n        assert!( Account::balance<Cake::Cake>(@guest) == 1 * 1000 * 1000 * 1000 , 1001);\n    }\n}\n// check: EXECUTED\n")),(0,s.kt)("p",null,"We already know in the above test that the make_cake function is normal",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"Then the problem must be in send_cake"),(0,s.kt)("br",{parentName:"p"}),"\n","Let's check it out  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    public fun send_cake( _to :address , cake: Token::Token<Cake> ){\n        Account::deposit<Cake>(@Chef, cake);\n    }\n")),(0,s.kt)("p",null,"When we look at the send_cake function, we will find that the parameter of Account::deposit\\<Cake",">","(@Chef, cake) is fixed to the administrator\naddress, which is wrong",(0,s.kt)("br",{parentName:"p"}),"\n","It should be sent to whoever needs to send it",(0,s.kt)("br",{parentName:"p"}),"\n","Fix it  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    public fun send_cake( to :address , cake: Token::Token<Cake> ){\n        Account::deposit<Cake>(to, cake);\n    }\n")),(0,s.kt)("p",null,"Ok, let's rerun spectest  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mpm spectest\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"We didn't find any errors in the test items, but the test still failed. What's going on?"),"  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'BUILDING StarcoinFramework\nBUILDING MyCake\n\nrunning 1 tests\n\ntest transactional-test::mycake_test.move ... FAILED\nError: Expected errors differ from actual errors:\nprocessed 7 tasks\n\ntask 3 \'run\'. lines 7-14:\n{\n  "gas_used": 97115,\n  "status": {\n    "Keep": "Executed"\n  }\n}\n\ntask 4 \'run\'. lines 16-26:\n{\n  "gas_used": 128354,\n  "status": {\n    "Keep": "Executed"\n  }\n}\n\ntask 5 \'run\'. lines 28-36:\n{\n  "gas_used": 90747,\n  "status": {\n    "Keep": "Executed"\n  }\n}\n\ntask 6 \'run\'. lines 38-48:\n{\n  "gas_used": 141989,\n  "status": {\n    "Keep": "Executed"\n  }\n}\n\n\n\nfailures:\n    transactional-test::mycake_test.move\n\ntest result: FAILED. 0 passed; 1 failed; 0 filtered out\n')),(0,s.kt)("h4",{id:"execution-update-test-baseline"},"Execution update test baseline"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This is because we need to update test baseline"),"  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mpm spectest --ub\n")),(0,s.kt)("p",null,"An exp file with the same name as the test file will appear in the spectests directory",(0,s.kt)("br",{parentName:"p"}),"\n","The result of the simultaneous test results is a pass  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"BUILDING StarcoinFramework\nBUILDING MyCake\n\nrunning 1 tests\n\ntest transactional-test::mycake_test.move ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 filtered out\n")),(0,s.kt)("p",null,"When you need to modify test items, remember to execute mpm spectest --ub after all test items are within the expected range  "),(0,s.kt)("h3",{id:"correct-code"},"Correct Code"),(0,s.kt)("h4",{id:"movetoml"},"Move.toml"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'[package]\nname = "MyCake"\nversion = "0.0.0"\n\n[addresses]\nChef = "0xf2aa2eae4ceaae88b308fc904975e4ae"\n\n[dependencies]\nStarcoinFramework = { git = "https://github.com/starcoinorg/starcoin-framework.git", rev = "01c84198819310620f2417413c3c800df8292ae5" }\n\n')),(0,s.kt)("h4",{id:"mycakemove"},"mycake.move"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"address Chef{\n    module Cake{\n        use StarcoinFramework::Signer;\n        use StarcoinFramework::Token;\n        use StarcoinFramework::Account;\n\n        struct Cake has copy, drop, store { }\n\n        public fun admin():address{\n            @Chef\n        }\n\n        public fun init(account :&signer){\n            assert!( admin() == Signer::address_of( account ) , 10000);\n            Token::register_token<Cake>( account, 9 );\n        }\n\n        public fun make_cake( account: &signer , amount : u128): Token::Token<Cake> {\n            assert!( admin() == Signer::address_of( account ) , 10000);\n            Token::mint<Cake>( account , amount  )\n        }\n\n        public fun destroy_cake( account: &signer , cake: Token::Token<Cake>) {\n            assert!( admin() == Signer::address_of( account ) , 10000);\n            Token::burn<Cake>( account , cake  );\n        }\n\n        public fun send_cake( to :address , cake: Token::Token<Cake> ){\n            Account::deposit<Cake>(to, cake);\n        }\n\n        public fun add (x:u128, y:u128 ):u128{\n            x + y\n        }\n\n        #[test]\n        public fun add_test(){\n            assert!( add(10 , 1) == 11, 101);\n        }\n    }\n}\n\n")),(0,s.kt)("h4",{id:"mycake_testmove"},"mycake_test.move"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"//# init -n test --public-keys Chef=0x98826ab91a9a5d85dec536418090aa6342991bc8f947613721c8165e7102b132 \n\n//# faucet --addr Chef --amount 10000000000000000\n\n//# faucet --addr guest --amount 10000000000000000\n\n//# run --signers Chef\nscript {\n    use Chef::Cake;\n    fun init(signer: signer) {\n        Cake::init(&signer);\n    }\n}\n// check: EXECUTED\n\n//# run --signers Chef\nscript {\n    use StarcoinFramework::Signer;\n    use StarcoinFramework::Account;\n    use Chef::Cake;\n    fun make_cake(signer: signer) {\n        let cake = Cake::make_cake(&signer , 1 * 1000 * 1000 * 1000);\n        Account::deposit<Cake::Cake>( Signer::address_of(&signer) , cake );\n    }\n}\n// check: EXECUTED\n\n//# run --signers Chef\nscript {\n    use Chef::Cake;\n    fun destroy_cake(signer: signer) {\n        let cake = Cake::make_cake(&signer , 1 * 1000 * 1000 * 1000);\n        Cake::destroy_cake(&signer, cake);\n    }\n}\n// check: EXECUTED\n\n//# run --signers Chef\nscript {\n    use StarcoinFramework::Account;\n    use Chef::Cake;\n    fun send_cake(signer: signer) {\n        let cake = Cake::make_cake(&signer , 1 * 1000 * 1000 * 1000);\n        Cake::send_cake(@guest, cake);\n        assert!( Account::balance<Cake::Cake>(@guest) == 1 * 1000 * 1000 * 1000 , 1001);\n    }\n}\n// check: EXECUTED\n")))}p.isMDXComponent=!0}}]);