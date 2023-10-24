export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar){return {data:{"content-query-N1Lvt1zD7m":{_path:P,_dir:"getting-started",_draft:D,_partial:D,_locale:j,_empty:D,title:Q,description:"How to install and set up Chakra UI in your project",version:"2.0+",body:{type:"root",children:[{type:a,tag:"h1",props:{id:"getting-started-with-chakra-ui-vue"},children:[{type:b,value:"Getting Started with Chakra UI Vue"}]},{type:a,tag:"blockquote",props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Please note that our docs are still under development."}]}]},{type:a,tag:k,props:{},children:[{type:b,value:"Let's see how you can get started with "},{type:a,tag:"strong",props:{},children:[{type:b,value:m}]},{type:b,value:" 🥳."}]},{type:a,tag:k,props:{},children:[{type:b,value:"You will start from a "},{type:a,tag:q,props:{href:"https:\u002F\u002Fvuejs.org\u002F",rel:[E]},children:[{type:b,value:"Vue 3"}]},{type:b,value:" project. Don't worry, this can be a new or existing project.\nIf you are looking to install "},{type:a,tag:h,props:{},children:[{type:b,value:m}]},{type:b,value:" in "},{type:a,tag:q,props:{href:"https:\u002F\u002Fnuxt.com\u002F",rel:[E]},children:[{type:b,value:"Nuxt 3"}]},{type:b,value:", you can take a look "},{type:a,tag:q,props:{href:".\u002Fnuxt"},children:[{type:b,value:"here"}]},{type:b,value:F}]},{type:a,tag:k,props:{},children:[{type:b,value:"The first thing you will need to do is install the "},{type:a,tag:h,props:{},children:[{type:b,value:m}]},{type:b,value:" package and its dependencies in the Vue project.\nThis can be achieved with the following terminal command:"}]},{type:a,tag:t,props:{className:u},children:[{type:a,tag:v,props:{className:[r,r]},children:[{type:a,tag:w,props:{className:[r,x]},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{className:[d,n]},children:[{type:b,value:"pnpm"}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,n]},children:[{type:b,value:"install"}]},{type:b,value:R}]}]}]}]},{type:a,tag:k,props:{},children:[{type:b,value:"Or if you prefer using yarn:"}]},{type:a,tag:t,props:{className:u},children:[{type:a,tag:v,props:{className:[r,r]},children:[{type:a,tag:w,props:{className:[r,x]},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{className:[d,n]},children:[{type:b,value:"yarn"}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,n]},children:[{type:b,value:"add"}]},{type:b,value:R}]}]}]}]},{type:a,tag:S,props:{id:T},children:[{type:b,value:U},{type:a,tag:q,props:{className:[V],href:"#usage"},children:[{type:a,tag:c,props:{className:[W,X]},children:[]}]}]},{type:a,tag:k,props:{},children:[{type:b,value:"Perfect, now before you can use the features of Chakra UI, you will have to add it to the app instance.\nFor this, you have to import the "},{type:a,tag:h,props:{},children:[{type:b,value:Y}]},{type:b,value:" function from the "},{type:a,tag:h,props:{},children:[{type:b,value:m}]},{type:b,value:" package in the "},{type:a,tag:h,props:{},children:[{type:b,value:"main.ts"}]},{type:b,value:" file.\nThis allows you to create the "},{type:a,tag:h,props:{},children:[{type:b,value:m}]},{type:b,value:" plugin instance and will make it easy to add plugin options like "},{type:a,tag:h,props:{},children:[{type:b,value:"extendTheme"}]},{type:b,value:" for example.\nThen you need to tell the application that you want to use the plugin, this will make the Chakra UI Vue features available to use in your Vue app."}]},{type:a,tag:t,props:{className:u},children:[{type:a,tag:v,props:{className:[l,l]},children:[{type:a,tag:w,props:{className:[l,x]},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{className:[d,G]},children:[{type:b,value:"\u002F\u002F main.ts"}]}]},{type:a,tag:c,props:{className:[f]},children:[{type:b,value:j},{type:a,tag:c,props:{className:[d,o]},children:[{type:b,value:H}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,I]},children:[{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:Z}]},{type:b,value:" createChakra "},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:_}]}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,o]},children:[{type:b,value:J}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,y]},children:[{type:b,value:"\"@chakra-ui\u002Fvue-next\""}]}]},{type:a,tag:c,props:{className:[f]},children:[{type:b,value:j},{type:a,tag:c,props:{className:[d,o]},children:[{type:b,value:H}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,I]},children:[{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:Z}]},{type:b,value:" createApp "},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:_}]}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,o]},children:[{type:b,value:J}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,y]},children:[{type:b,value:"'vue'"}]}]},{type:a,tag:c,props:{className:[f]},children:[{type:b,value:j},{type:a,tag:c,props:{className:[d,o]},children:[{type:b,value:H}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,I]},children:[{type:a,tag:c,props:{className:[d,$]},children:[{type:b,value:aa}]}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,o]},children:[{type:b,value:J}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,y]},children:[{type:b,value:"'.\u002FApp.vue'"}]}]},{type:a,tag:c,props:{className:[f]},children:[]},{type:a,tag:c,props:{className:[f]},children:[{type:b,value:j},{type:a,tag:c,props:{className:[d,o]},children:[{type:b,value:ab}]},{type:b,value:" chakra "},{type:a,tag:c,props:{className:[d,ac]},children:[{type:b,value:z}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,n]},children:[{type:b,value:Y}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:A}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:B}]}]},{type:a,tag:c,props:{className:[f]},children:[]},{type:a,tag:c,props:{className:[f]},children:[{type:b,value:j},{type:a,tag:c,props:{className:[d,o]},children:[{type:b,value:ab}]},{type:b,value:" app "},{type:a,tag:c,props:{className:[d,ac]},children:[{type:b,value:z}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,n]},children:[{type:b,value:"createApp"}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:A}]},{type:a,tag:c,props:{className:[d,$]},children:[{type:b,value:aa}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:B}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:F}]},{type:a,tag:c,props:{className:[d,ad,n,ae]},children:[{type:b,value:"use"}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:A}]},{type:b,value:"chakra"},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:B}]}]},{type:a,tag:c,props:{className:[f]},children:[{type:b,value:"app"},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:F}]},{type:a,tag:c,props:{className:[d,ad,n,ae]},children:[{type:b,value:"mount"}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:A}]},{type:a,tag:c,props:{className:[d,y]},children:[{type:b,value:"'#app'"}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:B}]}]}]}]}]},{type:a,tag:k,props:{},children:[{type:b,value:"This will also be the place where you can add extra "},{type:a,tag:h,props:{},children:[{type:b,value:"options"}]},{type:b,value:" to the Chakra UI Vue plugin to extend Chakra's features for the application.\nBut let's not dive into that yet, let's first see how you can use Chakra UI Components. An overview of all the components can be found here."}]},{type:a,tag:S,props:{id:af},children:[{type:b,value:ag},{type:a,tag:q,props:{className:[V],href:"#using-chakra-components"},children:[{type:a,tag:c,props:{className:[W,X]},children:[]}]}]},{type:a,tag:k,props:{},children:[{type:b,value:"Once you've installed and imported Chakra UI Vue, you can start using its components in your app.\nLet's pick the "},{type:a,tag:h,props:{},children:[{type:b,value:K}]},{type:b,value:" component, which is called "},{type:a,tag:h,props:{},children:[{type:b,value:L}]},{type:b,value:" from the package.\n(Note the use of the "},{type:a,tag:q,props:{href:"https:\u002F\u002Fvuejs.org\u002Fapi\u002Fsfc-script-setup.html",rel:[E]},children:[{type:b,value:"script setup"}]},{type:b,value:" here)"}]},{type:a,tag:t,props:{className:u},children:[{type:a,tag:v,props:{className:[l,l]},children:[{type:a,tag:w,props:{className:[l,x]},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{className:[d,G]},children:[{type:b,value:ah}]}]},{type:a,tag:c,props:{className:[f]},children:[{type:b,value:j},{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:M}]},{type:b,value:ai}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,N]},children:[{type:b,value:"setup"}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,N]},children:[{type:b,value:"lang"}]},{type:a,tag:c,props:{className:[d,aj]},children:[{type:a,tag:c,props:{className:[d,e,ak]},children:[{type:b,value:z}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:C}]},{type:b,value:"ts"},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:C}]}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:s}]}]},{type:a,tag:c,props:{className:[d,p]},children:[]}]},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{className:[d,p]},children:[{type:b,value:"import { CButton } from \"@chakra-ui\u002Fvue-next\"\n"}]}]},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{className:[d,p]},children:[{type:b,value:j}]},{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:O}]},{type:b,value:ai}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:s}]}]}]}]}]}]},{type:a,tag:k,props:{},children:[{type:b,value:"Next, you want to display the button on the page. After it is imported, the button will be available in the template."}]},{type:a,tag:t,props:{className:u},children:[{type:a,tag:v,props:{className:[l,l]},children:[{type:a,tag:w,props:{className:[l,x]},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{className:[d,G]},children:[{type:b,value:ah}]}]},{type:a,tag:c,props:{className:[f]},children:[{type:b,value:j},{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:M}]},{type:b,value:al}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:s}]}]},{type:a,tag:c,props:{className:[d,p]},children:[]}]},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{className:[d,p]},children:[{type:b,value:"  "}]},{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:M}]},{type:a,tag:c,props:{className:[d,am]},children:[{type:b,value:L}]}]},{type:b,value:g},{type:a,tag:c,props:{className:[d,N]},children:[{type:b,value:"color-scheme"}]},{type:a,tag:c,props:{className:[d,aj]},children:[{type:a,tag:c,props:{className:[d,e,ak]},children:[{type:b,value:z}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:C}]},{type:b,value:an},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:C}]}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:s}]}]},{type:a,tag:c,props:{className:[d,p]},children:[{type:b,value:K}]},{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:O}]},{type:a,tag:c,props:{className:[d,am]},children:[{type:b,value:L}]}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:s}]}]},{type:a,tag:c,props:{className:[d,p]},children:[]}]},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{className:[d,p]},children:[{type:b,value:j}]},{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,i]},children:[{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:O}]},{type:b,value:al}]},{type:a,tag:c,props:{className:[d,e]},children:[{type:b,value:s}]}]}]}]}]}]},{type:a,tag:k,props:{},children:[{type:b,value:"There you go! 🚀"}]},{type:a,tag:k,props:{},children:[{type:b,value:"You have a working button with some styling. Thanks to styled props, you can style "},{type:a,tag:h,props:{},children:[{type:b,value:m}]},{type:b,value:" components.\nLike you did here with our button, making it use the "},{type:a,tag:h,props:{},children:[{type:b,value:an}]},{type:b,value:" color scheme.\nLet's learn about styled props and the theming API of Chakra UI Vue here."}]}],toc:{title:j,searchDepth:3,depth:5,links:[{id:T,depth:ao,text:U},{id:af,depth:ao,text:ag}]}},_type:"markdown",_id:"content:1.getting-started:1.installation.md",_source:"content",_file:"1.getting-started\u002F1.installation.md",_extension:"md"},navigation:[{title:m,_path:ap,children:[{title:m,_path:ap},{title:Q,_path:P},{title:"Using Nuxt",_path:"\u002Fgetting-started\u002Fnuxt"},{title:"Design Principles",_path:"\u002Fgetting-started\u002Fdesign-principles"}]},{title:aq,_path:ar,children:[{title:aq,_path:ar},{title:"Style Props",_path:"\u002Fstyled-system\u002Fstyle-props"},{title:"Responsive Styles",_path:"\u002Fstyled-system\u002Fresponsive-styles"}]},{title:"Components",_path:"\u002Fcomponents",children:[{title:"Accordion",_path:"\u002Fcomponents\u002Faccordion"},{title:"Alert",_path:"\u002Fcomponents\u002Falert"},{title:"Aspect Ratio",_path:"\u002Fcomponents\u002Faspectratio"},{title:"Avatar",_path:"\u002Fcomponents\u002Favatar"},{title:"Badge",_path:"\u002Fcomponents\u002Fbadge"},{title:"Breadcrumb",_path:"\u002Fcomponents\u002Fbreadcrumb"},{title:K,_path:"\u002Fcomponents\u002Fbutton"},{title:"Center",_path:"\u002Fcomponents\u002Fcenter"},{title:"Checkbox",_path:"\u002Fcomponents\u002Fcheckbox"},{title:"Close Button",_path:"\u002Fcomponents\u002Fclosebutton"},{title:"Code",_path:"\u002Fcomponents\u002Fcode"},{title:"Collapse",_path:"\u002Fcomponents\u002Fcollapse"},{title:"Flex",_path:"\u002Fcomponents\u002Fflex"},{title:"Heading",_path:"\u002Fcomponents\u002Fheading"},{title:"Image",_path:"\u002Fcomponents\u002Fimage"},{title:"Input",_path:"\u002Fcomponents\u002Finput"},{title:"SimpleGrid",_path:"\u002Fcomponents\u002Fsimplegrid"},{title:"Stack",_path:"\u002Fcomponents\u002Fstack"},{title:"Tabs",_path:"\u002Fcomponents\u002Ftabs"},{title:"Tag",_path:"\u002Fcomponents\u002Ftag"},{title:"Wrap",_path:"\u002Fcomponents\u002Fwrap"}]}]},prerenderedAt:1698161767307}}("element","text","span","token","punctuation","code-line"," ","code-inline","tag","","p","language-tsx","Chakra UI Vue","function","keyword","plain-text","a","language-bash","\u003E","div","remark-highlight","pre","code","code-highlight","string","=","(",")","\"",false,"nofollow",".","comment","import","imports","from","Button","CButton","\u003C","attr-name","\u003C\u002F","\u002Fgetting-started\u002Finstallation","Installation"," @chakra-ui\u002Fvue-next\n","h2","usage","Usage","anchor","icon","icon-link","createChakra","{","}","maybe-class-name","App","const","operator","method","property-access","using-chakra-components","Using Chakra Components","\u002F\u002F App.vue","script","attr-value","attr-equals","template","class-name","green",2,"\u002Fgetting-started","Styled System","\u002Fstyled-system"))