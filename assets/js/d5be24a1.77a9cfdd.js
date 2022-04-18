"use strict";(self.webpackChunkbrayanbot_dev=self.webpackChunkbrayanbot_dev||[]).push([[1256],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8448:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(3117),r=n(7294),l=n(1048),o=n(8040),i=n(6010),s="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,u=e.block,c=e.defaultValue,m=e.values,d=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,o.UB)(),y=f.tabGroupChoices,N=f.setTabGroupChoices,w=(0,r.useState)(v),x=w[0],I=w[1],B=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=y[d];null!=T&&T!==x&&h.some((function(e){return e.value===T}))&&I(T)}var C=function(e){var t=e.currentTarget,n=B.indexOf(t),a=h[n].value;a!==x&&(O(t),I(a),null!=d&&N(d,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=B.indexOf(e.currentTarget)+1;n=B[a]||B[0];break;case"ArrowLeft":var r=B.indexOf(e.currentTarget)-1;n=B[r]||B[B.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},g)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return B.push(e)},onKeyDown:S,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},5707:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=n(102),l=(n(7294),n(4137)),o=n(5529),i=n(8448),s=["components"],p={sidebar_position:2},u="Hosting on MacOS",c={unversionedId:"Setup/Hosting/mac-os",id:"Setup/Hosting/mac-os",title:"Hosting on MacOS",description:"---",source:"@site/docs/Setup/Hosting/mac-os.md",sourceDirName:"Setup/Hosting",slug:"/Setup/Hosting/mac-os",permalink:"/docs/Setup/Hosting/mac-os",editUrl:"https://github.com/brayanbotdev/brayanbot.dev/edit/dev/docs/Setup/Hosting/mac-os.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Hosting on Linux",permalink:"/docs/Setup/Hosting/linux"},next:{title:"Hosting on Windows",permalink:"/docs/Setup/Hosting/windows"}},m={},d=[{value:"Installation",id:"installation",level:2},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Install BrayanBot",id:"install-brayanbot",level:3},{value:"Installing NodeJS Dependencies &amp; Starting BrayanBot",id:"installing-nodejs-dependencies--starting-brayanbot",level:3},{value:"Power Controls",id:"power-controls",level:2},{value:"Using PM2 Process Manager",id:"using-pm2-process-manager",level:3},{value:"Getting Help",id:"getting-help",level:2}],g={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hosting-on-macos"},"Hosting on MacOS"),(0,l.kt)("hr",null),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This page assumes that you have already completed the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Setup/pre-installation"},"Pre-Installation Steps")," If you haven not yet completed the pre-installation steps, please go back and complete them because the bot cannot function without them."))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,l.kt)("p",null,"To install certain dependencies (like ",(0,l.kt)("strong",{parentName:"p"},"wget")," or the latest version of ",(0,l.kt)("strong",{parentName:"p"},"curl"),") you will need ",(0,l.kt)("inlineCode",{parentName:"p"},"brew")," installed on your machine. However"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install brew")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Install wget")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wget\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"(Optional) Install curl\nIf you would like to use ",(0,l.kt)("inlineCode",{parentName:"li"},"curl")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"wget")," you may install it using ",(0,l.kt)("inlineCode",{parentName:"li"},"brew"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install curl\n")),(0,l.kt)("h3",{id:"install-brayanbot"},"Install BrayanBot"),(0,l.kt)("p",null,"Installing BrayanBot is pretty straightforward and can be done in less than 5 steps."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"stable",label:"Stable",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the zip file and unzip")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/brayanbotdev/brayanbot/releases/download/latest/brayanbot.zip &\nunzip brayanbot.zip\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"or, if you would like to use curl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://github.com/brayanbotdev/brayanbot/releases/download/latest/brayanbot.zip &\nunzip brayanbot.zip\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Move into the BrayanBot Directory")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd BrayanBot\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Copy the example config to the main ",(0,l.kt)("inlineCode",{parentName:"li"},"config.yml")," ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cp example.config.yml config.yml \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"or if you would like to simply rename the file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mv example.config.yml config.yml \n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Edit your ",(0,l.kt)("inlineCode",{parentName:"li"},"config.yml"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano config.yml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"or")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim config.yml # Imagine using vim\n"))),(0,l.kt)(i.Z,{value:"Dev",label:"Dev",mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Dev Branch")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are interested in receiving updates ",(0,l.kt)("em",{parentName:"p"},"as soon as they are out")," for the cost of high chance of breaking changes and less stability; you may clone into the ",(0,l.kt)("strong",{parentName:"p"},"dev")," branch instead of ",(0,l.kt)("strong",{parentName:"p"},"main"),". Changes from the dev branch will be ",(0,l.kt)("em",{parentName:"p"},"eventually")," merged into main, but it is an option for those who like to live on edge.\nYou also must keep in mind that using ",(0,l.kt)("inlineCode",{parentName:"p"},"git")," will set up version control for your bot files and will make it harder to update if you have edited default -and tracked- bot files. ",(0,l.kt)("strong",{parentName:"p"},"Do not")," use this branch if you do not know how to use ",(0,l.kt)("strong",{parentName:"p"},"git"),"."))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Clone the Github Repo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone -b dev https://github.com/BrayanBotDev/BrayanBot.git\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Move into the BrayanBot Directory")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd BrayanBot\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Copy the example config to the main ",(0,l.kt)("inlineCode",{parentName:"li"},"config.yml")," ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cp example.config.yml config.yml \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"or if you would like to rename the file instead of copying")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mv example.config.yml config.yml\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Edit your ",(0,l.kt)("inlineCode",{parentName:"li"},"config.yml"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano config.yml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"or")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim config.yml\n")))),(0,l.kt)("h3",{id:"installing-nodejs-dependencies--starting-brayanbot"},"Installing NodeJS Dependencies & Starting BrayanBot"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install Yarn")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g yarn\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Install Required dependencies")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Start the Bot")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n"))),(0,l.kt)(i.Z,{value:"npm",label:"NPM",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install Required dependencies")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Start the Bot")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")))),(0,l.kt)("p",null,"And that's it, you have successfully started your bot!"),(0,l.kt)("h2",{id:"power-controls"},"Power Controls"),(0,l.kt)("p",null,"If you would like to keep the bot running after you log out of your terminal/machine; you may use ",(0,l.kt)("strong",{parentName:"p"},"PM2"),". It will also allow you to have BrayanBot persist between reboots, if you configure it that way."),(0,l.kt)("h3",{id:"using-pm2-process-manager"},"Using PM2 Process Manager"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install PM2 through NPM\nnpm install -g pm2\n# Start BrayanBot with PM2\npm2 start index.js --name brayanbot\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pm2 stop brayanbot")," # Stops the pm2 process"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pm2 restart brayanbot")," # Restart the process"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pm2 logs brayanbot")," # View recent logs as well as a live console"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pm2 logs brayanbot --lines 1000 | nc termbin.com 9999")," # Export the bot's past logs and paste them to termbin.")),(0,l.kt)("h2",{id:"getting-help"},"Getting Help"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udca1 Ran into a problem?")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Join our ",(0,l.kt)("a",{parentName:"p",href:"https://brayanbot.dev/discord"},"support server")," and open a ticket."))))}k.isMDXComponent=!0}}]);