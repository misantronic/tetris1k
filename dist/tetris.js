B=[[[[0,1,1],[1,1]],[[1,0],[1,1],[0,1]]],[[[1,1],[0,1,1]],[[0,1],[1,1],[1]]],[[[1,1],[1,1]]],[[[1,1],[0,1],[0,1]],[[0,0,1],[1,1,1]],[[1],[1],[1,1]],[[1,1,1],[1]]],[[[1,1],[1],[1]],[[1,1,1],[0,0,1]],[[0,1],[0,1],[1,1]],[[1],[1,1,1]]],[[[1],[1],[1],[1]],[[1,1,1,1]]],[[[0,1],[1,1,1]],[[1],[1,1],[1]],[[1,1,1],[0,1]],[[0,1],[1,1],[0,1]]]];b=B[(M=Math)[f="floor"](M[f](7*M.random()))],P={x:8,y:0},i=0,g=[],G=[],L="length",I=setInterval(function(a){for(F=b[i],y=0;y<30;y++)for(g[y]=[],G[y]||(G[y]=[]),x=0;x<17;x++)g[y][x]=G[y][x];for(H={},y=0;y<30;y++)for(H[y]=1,x=0;x<17;x++){if(x==P.x&&y==P.y)for(j=0;j<F[L];j++)for(k=0;k<F[j][L];k++)F[j][k]&&(g[y+j][x+k]=F[j][k],G[y+j+1]&&G[y+j+1][x+k]&&(a=1));g[y][x]||delete H[y]}for(o="",y=0;y<30;y++){for(x=0;x<17;x++)o+=g[y][x]?"<b></b>":"<i></i>";o+="\n"}p.innerHTML=o,P.y++,(P.y+F[L]==31||a)&&(b=B[M[f](M[f](7*M.random()))],P.x=8,P.y=i=0,G=g.slice(0));for(r in H){for(y=r;y>0;y--)g[y]=g[y-1]?g[y-1]:[];G=g.slice(0)}},100),onkeydown=function(a,c){c=a.keyCode,39==c?P.x++:37==c?P.x--:38==c&&i++,b[i]||(i=0)};