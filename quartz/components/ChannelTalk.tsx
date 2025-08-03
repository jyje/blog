import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

type Options = {
  pluginKey: string
}

export default ((opts: Options) => {
  const ChannelTalk: QuartzComponent = (_props: QuartzComponentProps) => {
    return <div></div>
  }

  ChannelTalk.afterDOMLoaded = `
    // 채널톡 스크립트 로더
    (function(){
      var w=window;
      if(w.ChannelIO){
        return w.console.error("ChannelIO script included twice.");
      }
      var ch=function(){
        ch.c(arguments);
      };
      ch.q=[];
      ch.c=function(args){
        ch.q.push(args);
      };
      w.ChannelIO=ch;
      
      function l(){
        if(w.ChannelIOInitialized){
          return;
        }
        w.ChannelIOInitialized=true;
        var s=document.createElement("script");
        s.type="text/javascript";
        s.async=true;
        s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";
        var x=document.getElementsByTagName("script")[0];
        if(x.parentNode){
          x.parentNode.insertBefore(s,x);
        }
      }
      
      if(document.readyState==="complete"){
        l();
      }else{
        w.addEventListener("DOMContentLoaded",l);
        w.addEventListener("load",l);
      }
    })();

    // 채널톡 부팅
    ChannelIO('boot', {
      "pluginKey": "${opts.pluginKey}"
    });

    // SPA 네비게이션 시에도 채널톡이 정상 작동하도록 보장
    document.addEventListener("nav", () => {
      // 페이지 변경 시 채널톡 재초기화는 필요 없음
      // 채널톡은 SPA에서도 지속적으로 작동함
    });
  `

  return ChannelTalk
}) satisfies QuartzComponentConstructor<Options>