(function(){
    'use strict';

    angular.module('application').
        controller('settingsController', SettingsControllerFn);

    SettingsControllerFn.$inject = ['userDetailsFactory','$rootScope'];

    function SettingsControllerFn(userDetailsFactory, $rootScope) {

        var settingsvm = this;

        settingsvm.pic = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhUUExQWFhUUFhgUGBgYGBcXFxoXFxcXFhQXFxoYHCggGBomHRUWITEhJSkrLi4uGh8zODMsNygtLisBCgoKDg0OGhAQGywkICQsLCwsLCwsLCwsLCwrLC00LCwsLCwsLCwsLCwsLywsLCwsLCwsLCwsLCwsLCwsLCwsLP/AABEIARUAtgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABGEAABAwICBgcECQIEBAcAAAABAAIDBBEhMQUGEkFRYQcTIjJxgZFSocHwFCMzQmJygpKxQ9FTorLhFSRzwhZUY6Ozw9L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAYF/8QAKxEBAQACAQMDAgUFAQAAAAAAAAECEQMSITEEQVETcQUiYYGxIzM0gpEU/9oADAMBAAIRAxEAPwCcUREBEVMsgaC5xDWtBJJNgAMSSTkEFS1endYqajbtVMzI74gE3e78rBdzvIKMNd+llxLodHmwxBqCLk/9JpyH4j5DIqLZC+Vxe95e9xu5znFzyeLibk+azy5JGuPFb5S/pjpojbcU1O6T8UrhG3xDRcnz2VyGkOlXSMvdkjhH/pxtv6ybS440x5Kl0RG5Z9dvu1nHJ7NrV62V0nfrKj9Mr2D0YQFr5dIzO700rvzSPP8AJWMijadKi88T6quOoe3uvcPBxH8FWkQZ8Wm6lvdqahv5ZpR/DlsqXXnSMfdrJv1lsn/yBy55egJumo7ui6W9IsttGGUb9uOx9Y3NA9F0ujOm1mVTSPb+KJ4f57Lw23qVEPVHgqXsO8K0zqt458PpbQWvlBVkNiqGh5wEcl43k8Gh9tr9N10q+PXt3FSh0M63zNqW0c0jnxStcIg4lxY9gLrNJxDS1rsMgQLWub6Y57ZZcevCckRFdmIiICIiAiIgommaxpc4hrWgucSbAAC5JJyFl8/9I+vz695hhJbSNOAyMxH33/h4M8zjYN2vS/rqZnuooHfVRm0zh/UkB+z/ACNIx4uH4cYxWWeXtG+GGu9ERFk0VtkI3q6yp4hY6JpMtZtmu5qy+n4KyCr8dRxVdWeFty+VghFm2DhxXjYw1Oo6VqOn4+irdIG4K3LPuHqrCnW/KNyeF1058FQ5xOZVKKdI2pkC2upc+xpCjcP/ADMQ8nPDD7nFat+Stgq0Vr6O1n6TKGjJZtmeUYFkNnWPBzyQ1p5XvyXLaO6bmOlAnpTHETbbZJ1jm8yzYbccbG/AFQyAiv11SYR9d0NZHNG2WJ4fG8bTXNNwRyV9fOXRnru7R83Vykmlld2xn1bjh1reXtDeMcxj9FseCAQQQRcEYgg5EFaS7ZZY6VIiKVRcV0qa2fQaXYjdaonuyO2bGjvyeQIA5uHArtHOABJNgMSTlZfMWu2sBr6ySbHYv1cQ4RNJ2PAuuXHm625Uzy1F+PHdaEK51Jtc4K/HGGi5zViWS/gufe3VrXlbVxkltwVtX46SRzdpsby32gxxb6gWUoVCcbx8VV1bXZe5YgK9Bso0nq+V19ORlirSvx1HH1V1zA7+6jdnlOpfDDBXrnE5lVyQkcwrYF1ZV4qmMJyCvx0/H0VUkwGAUb+E9PytimPFeOhtvCofITvVCdzspkVtZEdO+T7Nj32z2WudbxsFTsWJBFiMwcCPEblZVSyPirr4S1ULIgl3H55KLUyRjqaehTWvrGGhlPaibtQk74h3meLSRb8J/CVDs8NsRkrmidIvppo54u/E4Pbztm08iCWnkSrY5au1c8dzT6xRYmiNIsqYI54zdkrA9vGxF7HgRkeYXi6HK5Xpe019G0e9rTZ9QRA38rgTKf2BwvxIUA0rN/opH6eK4uqqeAHCOIyW5yv2R7oveo9edlvuXPy3vp1cU1NrNTJfDgqtHUEk8jYomlz3HAD3kncBvKx1NeoerIo4dp4+vlALz7IzEY5DfxPgFTwv5qzqxqHBTAOlAmmzu4XY08GNP+o4+GS60Iiqu1mldX6ap+2hY4+1bZf5PbZ3vXEaa6L83Usv6Jfg9o/keakpE2jT560roiemdszxOj4Ei7T+Vwu0+RWGx5GS+jpomvaWuaHNOBDgCD4g5rjdN9G9PLd0BMDuA7Uf7Sbt8iByU7V6fhFkc4OeCr2gMcFstM6mVdNcuiMjB9+K7x5gDab5i3Nc+3E2GJJtYZ34W4pqJ6qvSz3wGSsrqtBahVVRYvb1EZ+9IDtEfhjz/dsqSNX9Taaks5rNuQf1JLOcD+EZM8hfmp3IjVqNdA6i1VTZxb1MZ+/ICCR+FnePnYc1IWhtQaSCxczrn+1JYjyZ3R53PNdSirtaR4xoAsAABuGA9AtZp3QEFW3ZmYCbYPGEjfyu+Bw5LaIiUDa06uSUMuy/tMdcxyAWDhwPBw3haVfQmnNEx1cLoZBg7I72uHdc3mP7jeoG0ro59PK+GQWcw2PAjNrhyIsfNWlUs09gfcYrGlZYpE+xWRUtwvwTxU+YmHoJ0xt081K44wPEjPyS3JA8Htcf1hFG+oOsH0GpdLfB0To/V8bh/pK9W+OU05s8Lvs3fTKw/wDFcd8EZHheQfyCuHqjkPNSt066NIfS1IGB2qdx59+P/wC1RPU5+Syzn5m2F/I6bo00OKirD3C7KcCQ833tEPUF36FM643oqoOrousOc73P/S09W0eHZcf1LslnWk8C4vTvSNTwkshaZ3DAkHZjB/PY7XkCOaq19jrKgspKaN2w9u1LJ3WWJIEZed2BJAuSC3de+HojoxhaAaiR0jvZZ2GevePjceCF37NM/pQqb4QwgcDtk+u0P4W00X0osJAqISwe3GdseJaQCB4XXSN1KoQLfRmeZeT6l11qdJ9GlK8fUufC7diZG+Yeb+jgp7I7utoK6Odgkie17Dk5puOYPA8jishRNTaLr9Ey9YxhmhJ7fV3c17fxNzY4bnWsOJFwpVp5g9jXtvZ7Q4XFjZwuLg5HFRUyrioELdra2W7XtWF/XNVooSIi0euGmJKaC8MbpJpHdXGGtLrEgkuIAxAAy3mykXNP6y09GPrX9oi4jb2nny3DmbBcRW9KUhJ6qnYBuMji4+YbYD1Kx9F9H1VUuMtXJ1e2dp1+3K488bN8ybcF11F0fUMYF43SHjI9x9zSG+5T2V71ytL0pTA/WQRuH4HOYfftLttXda6eswjcWyAXMb7B9t5G5w8D42Vip1FoXi3UBvNjntP82PmFyulujiWIiWilLiw7TWuIbICMix4s0nxsnY7pOXD9KOgOth+ksH1kA7XF0WZ/aTteBcul1brJZadjp43Ry4te0jZ7TSRtAcHWv5rZPaCCCLgixByIOBChPl82rMabt8le1i0Z9FqZYdzHdnmw9pnj2SPO6xoj2D5q1Vxb3UDVv6fUPi3NiLydwO2xoHntO9CilLoU0D1FGahws+qIcOPVNuIvW7neDgi3xxmu7nzzu+zqdctBCuo5YMA5zbsJ3SN7UZ8LgA8iV8x1YLSQ4Fr2Ete05hzSQ4HmCCPJfUdVpQhxDQLA2ud6ijpN1YEk7KqFthM9kc7RiA5zmsbKORwDudjvJVM7Ley/HMpO7s9A0nU00EfsRMafENG177rPXpXiwdArYlubMaXn8OQ8TkFU2PbkZHeweTc8gL281la0VooaOSVoF2ABjbYbbiGtvyBNzyBV8cNy2+GeefTZJ5Y4ppvYaORdj/ZW3SFps9pYeeR8HDBQZpHSpmnZ9IlJc97QZJD2Yw5wG0fZYMyAMAFIvR3px/0h1DJK2oidtiJ99tpLLu7LjnG5oJHCwtmkkuvbaOux2SK7VUJiOF9g4WP3Tusd7f4VpRcbLqtMcplNwREVUiIqXusCUCSQNFybBURmR+LIyRxdZo8r5rPptGhoMsuJaC78LQMTYbzzUFa3a0yVLzJK52wT2Igey0bhbIm2bjiT5BXuGtb9/Zn9SXx/1NLo5m96I2/CQ73LyOUOyzGYOBHiFGOqmnnUU8IZUMmp5BGZGscXMZt95tj3JWXuQPA8pn0no8OaXXs5oJDt4sL+Y5KZhMpdeyPq6s21KKmN1wDxAPqFUs2qLul+gtLDOB32uicebDtM8yHu/atBqTq8a+pjgF+rH1kzhujBFxfcXYNHjfcVIXShRGSiuAS5ksbmgYklx6qw436xbnULRI0dTbIaDPLZ8z92191jfwtBI5kuO9aY692eW/Z3kUYaA1oAa0AADAADAAcl4sbR9b1lwRYjHkQi6ZZZuOSyy6rmauWz2XNhck+NrD+Vfa4OGBBHqrmlKQF5B3O2h4HG3wVhtO0G4Fjyw9y4rLK75ZYuoiIKJWk2INnNIc08CMlXpotrqV8Bsybsua12AL2ODm2PA2txF0VuWFrhZwurS6lnyrcZUN6f1c2pO3eJ7RsuaRbAZG3xGBXfdGurmw9lQ4bEULTsOdhtuc0suL5tDS7HK5Fr2K6P6OcLSPsMhe9vDgvJKcuPac53NxLj71njLLN3cniJuMu9dtthpPS4kIjjxF7uduwxsPMZrHVuKENyz4q4tLlbd0mMxmoIiKqRWqokMJGYsfQgq6iDY0elo52FklmucC0g4A3Fjsn4ZqFdbdUXRuEcg2S02Y+1mvbuIOWWYzClB9IDl6bl6KY2sHvaOAcdn0U525a+Z7qzjxm9eL7I71L1V6wtYBeJrtuWV3dAuC4Xy2iAGgealbSekhKDHHizJ7txHst48ytb9FBttOc62QcSQPJXwLKMd4y/r5LjLZfjw9RERZ4R8+GIVMkzRmQFWrBpG2Itid+ZvxxQjK1eeSP0keQIRZ+gKfZBIyA2R/J+CLp48fyubly/MzK6j6wcHDf8CsNujC0FziDYE2F8bDeVt144XFuKtcJbtnOTKTTjNEVnXQRS/wCLGyT9zQ74rLXK9GVWX6Piae9CXQu5bJu0ftc1dUuV2iIigEREBEVmrDtk7Ofw32QX4SDju/lXjZaynrQLNcNm2HL/AGWVJKGi5NgplLjdvXGxt5jnxXq1z53yEbDbAG4J+fctioTZoRERAiIgIiIELgZYoz/Uc5vPCN77+rR6rZHRDr94W4439P8Adcpoys6zTTIRlT0ksjuG3I+JoB5htj+oqQlvhhLj3c/JyWZdluCINaGjIIriLdziIiCEujmr6qsraQ/4sjmjnHI6N/u2P2lSIom17Y/R2mXTtGD3ioZwc14tM3xLusHmCpSoKxk0bJYztMeA5p5HjwIyI3ELkymq7sLuL6IiosIiICLD0rpWGmZtzSNY3dfMng1oxceQC4PSvSkASKaG/wCOU28wxu7xcPBTpG0iTQh4sR/dYzNHC+JJHDJRP/420lP9kT4Qwh38tcU/43pgY/8ANedNh74k6TrTIBbJeqHYOkSuidsy7DjvbJHsOt+nZt6LqdDdJcEhDZ2OhJ+9fbj8yBtN8xbmmjcdyiohla9oc1wc1wuHNIII4gjAhVqEiIiArdTO2NjnvNmsaXOPANFyfQK4o66U9YwG/Q43Xc6zpiPutzbH4nAkcLcVMRa2PQvO6prK+qcMXCPyD3PIb5NjaPIKXVHfQdo4x0DpXD7eZzm/kYBGP8zXnzUiLrwmsXHyXeQiIrKCIiDm9etU2aRp+rJ2ZWXdFJ7Lt4PFhwBHgcwFCug9OVOiZ3087HbId9ZETiD/AIkRyxGPB3LNfRy5vXTU2DSMdn9iVg+rlA7TeR9ph3tPlY4qmeG2mGfS1uiNLQ1UfWQvD27/AGmng4ZtPis1QZpbRVZomo7RdG7HYlZ9nI3kTg4cWOGG8ZFdboHpNBs2rZY/4kYuPFzMx+m/gFzXHTqmUqRlqtZtNNo6d8zhtEWaxuW093dHIZk8gVl6P0jFO3bhkbI3i0g25EZg8iuQ6XYiaSJwybOC7ldjwD6m3moia4KngqtK1OJ23nFzjhHGy/8AlbwAxPPEqR9E6mUVIAZdmWTPaksRf8EeIHvPNUdFNK1tFtgdqSR5cd/ZOw0eFhfzK6HSeho5sTdr/aHx4qbU4ye6n/jUTRZt7DKwAHoSF4NPR8Hf5f8A9Ln9I6DMLHSPcSxgLnEOODRiSRn6XWjh0hTPc1rJSXPIa0DauXONgPUppt04fLvJq2mnGxKGuafuyNBb77hcprJ0cRyNMlGdh+fVk3jd+UnFh93hmtpT6sPPecWj820fdh710dBRNhbstvbPE3JPFQpnjj7IY1Y1km0dMWPDurDrSxOzab9pzRuePQ+hE2xvDgHA3BAIPEHEFRN0uU7WVUbxgZIrv5lriATzth+kKS9BQmKlgY/AxwxtcTuLWAG/oprKNgvHGwucAMSdwHNclp3pBpYLtjPXvG5h7APOTL9t1G2sOtdTWXEjtmPdGy4Zy2t7z4+gUSJtdrrd0htaDFRkOdkZs2N/6ftnnl4rjtTdWpdJVXVgu2QduaU4lrSTc3Ob3G4F99zkCmp+qU+kZNmIbMbT9ZKR2Gb7fifb7o5XsMV9D6tavw0MAhgbYDFzji57jm953nDwAAAsAFthhtjnyaZ9HSsijZHG0NZG0Ma0ZBrRYD0CvIi3cwiIgIiICIiDF0no2KojdFPG2SN2bXC45EcCNxGIUOa4dEksV5KEmWPPqnH61v5HHCQcjZ35iptRRcZVscrHyVHJJDIS0vikYbG21G9p3g5EeBW/k11qJIHwVAbMx7bXIDZARi1wc0WJBAOLTkp51l1QpK8fXxAvAs2RvZkb4OGY5G45KJNZeiSqgu6mIqY/ZwZMB4Hsv8QQfwrHLjrbHklY/RrrTHTB8FQ/YY522xxBIDiAHNNsgbA3yzUoUdZHK3aikZI3ixwcPcvnaeFzHFj2uY9ubXAtcPFpxC8ikLHbTSWuH3mktPqMVnY1mT6Mq2B0b2uyLXA+BBBUI9HMQfX019xc7zbG4j32PkqINcK1rCzr3Oa5pYQ+zzYi1w5w2r+a1uidIvppWzRWD2XtcXHaaWm434OKaLX0QtPpXWikp7iWdm0Put7b/wBrbkedlDGktYqqo+1nkcD90HZZ5tZZp9FqwFHSnqb7WLWE1Fb9IDQWsLRGx97bLDdu0AcbuJcRffbFYemNPVFUfr5XPGez3WD9DbDzOKwaeF0jgxjXPe7JrQXOPg0YlSBq10SVU9nVLhTR+zg+UjwHZZ4kk/hV5jvwpcteUexRlzg1oLnONmtaCXE8ABiTyCk/U3okkltLXExszELT9Y787h9mOQ7XNpUm6s6oUlAPqIhtkWMju1K7xcchyFhyW+WuPH8scuT4Y9BRRwRtjiY1kbBZrWiwHp/KyERaMhERAREQEREBERAREQEXhKsPqrGxCDE03q/TVjdmohZINxIs5v5Xizm+RCiXXDoxjiePosrhtDa2Je0BjYAPAuBgcwTzUx/TBwXNaeidJKXDIAAC+OH+5Ky5u2Lfg75aqCK/Vyph70TiPaZ2x/lxHmAtWyMuOy1pJ4AEn0GKnN8ZbmCFSubrdX0oieh1Tqpf6ewOMh2fd3vcpC1Q6KIJG9ZUzPfZxHVs+rbkM3YuOe7ZW6ZC45AldFq2XRB4cMyCBfxB+Cvx5by7qcuMxw3Gz0PoOnpG7NPCyIb9kYn8zs3HmSVsFi/TBwVyKfa3YLrcK8i8BXqAiIgIiICIiAiIgIiICoJVa1r9IWkaxws1/ddf73AoM1UyMBGKqRBgyMIOK1chuT4roXtuLFaOqpiw45bj871jzb034NbqwqQwcB6KpFzukV+kPa8QrC2Gj6MmznYDcOP+yvhvqmlOSzpu2TDDfE5LLARF1uJ6qmlWpZA0FxNgBclWNHVhkAJbsg3tjc23EoM5ERAREQEREBERAREQFqK2mEjC0+IPA7itutegtaIrS9pa/wC0Zg7nz+fitgtDpJhjcJmZjBw4jLH+PRbmmnEjQ5uR+SDzQXVTIwOFiLgqpEGjrKQsPFpyPwPNY66NzQRY4grTaLmhfNLG1206EgEHLmR7Vjdp4EeCxvBb3x8N56jGamXn2/VfoaH7z/IfErZoi0xxmM7Mssrld0RFr9L1pY0NZ9o/BvLn8/BWVY1bJ10nVjuMN3nidzfnnwWyp+8PncsOiphGwNGeZPE71mU/eHzuQZiIiAiIgIiICIiAiIgLXrYLXoPHNBBBxBwK1NDMaeUxuPYfiDw4H4FbdYelKTrGYd5uI+I80G3RajQGkNtuw7vNGHNv9wtq9wAJOAAuTyCDRa5ac+iwdk/WydiPl7T/ANN/UhRpozSTqaVkzcS04i/eacHNPj/IBXR65U/0kGY3bsAhh3bLcdk/z4lcfTx9a+NhOyHHE/O/+4X1PSdH0st/u85+KfW/9WGv9U40VU2WNsjDdrwHA8j8VeXM6ryCC1PbZbm2/E4+/Px8V0y+Zdb7PRY71OrytVM4jaXOyHyAOa1Gjoy9xmfm7ujg3l8/yqKqT6RLsD7OPEnifnAeZWzAUJeq5T94fO5W1cp+8PncgzEREBERAREQEREBERAWvWwWvQEREGj0rCYpBKzC5v4O/sf7q7pDSPXtZHHm+21y5eGF/RbOeEPaWnI/N1gaI0eYy5zs77I8OPmg57pAqhHBHTMzkNz+RuN/N38FcPKCAC3AtII5WW01mqzLWTE/0z1TRwDCR7zc/qWvX3fS8XTxSfLxn4j6m8nqbZ7dp+yRH1AqKeKpbgSAHW3OBsfR1/ULOqNMF8TWt+0f2XW3bsPH3YrmOjeoJ6+nOLLbY5X7Lh59n0XU6K0dsOLnZgkN8Pa818fm4+jO4vVek5vrcOObMoKURsDd+ZPErIRFk6RXKfvD53K2rlP3h87kGYiIgIiICIiAiIgIiIC162C16AiIgIiIIj1lbs1044vJ9QHfFYa2Ou7NmvkPHqz/AO20H3grWSHA+C9B6e/059o8P67HXqMp+t/l1fRcy7qh3ARj1Lz/ANq79cV0Xx/VTO4vaP2tv/3LtV8f1V3y16v8OmvTY/v/ADRERc7tFcp+8PncrauU/eHzuQZiIiAiIgIiICIiAiIgLAsiIFksiIFksiIIu6SG2rPGJh97h8FoZ3dkr1F9z039qfZ438Q/ycvukHo0Z/yrjxmd/oYF1tkRfJ5/7mX3eo9F/j4fYslkRYuosrkA7QXiIMxERAREQEREH//Z";
        settingsvm.username = userDetailsFactory.getUsername();
        settingsvm.email = userDetailsFactory.getUseremail();

        settingsvm.passTheme = theme;

        function theme(value) {
            console.log('color changed');
            userDetailsFactory.userStyle = value;
            console.log('color changed');
            $rootScope.$emit('userDetailsFactory.userStyle', value);
        }

        settingsvm.abc = function(){
            console.log('abc');
        };

        console.dir(settingsvm);

    }
})();