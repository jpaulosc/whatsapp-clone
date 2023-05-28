import { useEffect, useState } from "react"

type Props = {
  onFinish: () => void;
}

const Preloader = ({ onFinish }: Props) => {
  const [progress, setProgress] = useState<number>(0);

  async function steps() {
    setProgress(20)
    await new Promise(resolve => setTimeout(resolve, 800));
    setProgress(40)
    await new Promise(resolve => setTimeout(resolve, 700));
    setProgress(50)
    await new Promise(resolve => setTimeout(resolve, 400));
    setProgress(80)
    await new Promise(resolve => setTimeout(resolve, 600));
    setProgress(100)
    await new Promise(resolve => setTimeout(resolve, 100));
    onFinish()
  }

  useEffect( () => {
 //   steps();
 onFinish()
  }, [])

  return (
    <div data-testid="wa-web-loading-screen" className="_3XAyL _3xLrC">
      <div className="_2h8DS _3IZS0">
        <span>
          <svg width="250px" height="52px" viewBox="0 0 250 52" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g className="_2hRN8">
              <circle fill="#B6B6B6" cx="65.7636689" cy="21.1046108" r="3.65625"></circle>
              <circle fill="#B6B6B6" cx="81.0791876" cy="19.3283142" r="3.65625"></circle>
              <circle fill="#B6B6B6" cx="96.3947063" cy="17.7846275" r="3.65625"></circle>
              <circle fill="#B6B6B6" cx="111.710225" cy="17.5274031" r="3.65625"></circle>
              <circle fill="#B6B6B6" cx="127.025744" cy="17.6118619" r="3.65625"></circle>
              <circle fill="#B6B6B6" cx="142.341262" cy="18.4196288" r="3.65625"></circle>
              <circle fill="#B6B6B6" cx="157.656781" cy="19.9893339" r="3.65625"></circle>
              <circle fill="#B6B6B6" cx="172.9723" cy="22.0657859" r="3.65625"></circle>
            </g>
            <path className="_2bTHj" d="M190.14097 4.7518926h48.227869l.281462-.00596781c1.058365-.00288774 2.664865.25185461 2.695721 2.87464716.142823 12.13996425 0 22.28077555 0 34.40910725 0 .06028-.024112.168784-.036168.217008l-16.394805-.0086927c-12.47317.0007215-24.136918.0136044-37.78743-.0033633l-.010915-6.2953341c-.030319-9.5718533-.105914-18.2714581.010915-28.31872515.033356-2.86867935 1.976535-2.91690333 3.013351-2.86867935zm20.097267 4.28597465l-19.256815-.00079524.002426 4.98254029c-.000422 6.5558423-.012657 12.8111695-.002954 19.3619492l.011919 4.9777941h46.536157l.008754-4.9777414c.010547-8.1882109.002637-15.913459.002637-24.3331514l-27.302124-.01059555zM179.195421 44.6572387c.397848-.036168.807752-.024112 1.2056-.024112 9.620684 0 19.241369-.012056 28.862053 0 .132616.4701838.54252 1.6393289 1.036816 1.6393289 3.255119.012056 4.510238 0 7.765357 0 .542519.036168.988591-1.1450331 1.133263-1.6513849 9.910029 0 19.820057.012056 29.730086.012056.084392.012056.265232.036168.349624.048224-.016075.2571945-.016075 1.0085894 0 2.2541846 0 1.4209691-1.193544 1.8201689-1.965128 2.1215688-.421959.1205599-.868031.1326159-1.289991.1928959h-63.560505c-.651024-.072336-1.350272-.108504-1.916904-.4701838-.566631-.2893439-1.000647-.7595278-1.350271-1.2779356v-2.8446419z" fill="currentColor"></path>
            <path className="_2MdkY" d="M37.7314595,31.1612046 C37.0876293,30.8391042 33.9223475,29.2816062 33.332139,29.0666255 C32.7419305,28.8517683 32.3127104,28.7444016 31.8834903,29.3887258 C31.4542703,30.0332973 30.2204788,31.4835521 29.8447567,31.91339 C29.4692818,32.3428571 29.0936834,32.3968494 28.4499768,32.0745019 C27.8060232,31.7521544 25.7314595,31.0723707 23.272278,28.8787027 C21.3582085,27.171583 20.0661004,25.0632896 19.6905019,24.4185946 C19.315027,23.7741467 19.6505946,23.4257297 19.9729421,23.1046178 C20.2625483,22.8161235 20.6167722,22.352556 20.9386255,21.9767104 C21.2606023,21.6007413 21.3678456,21.3320154 21.5824556,20.9026718 C21.7970657,20.472834 21.6898224,20.0968649 21.528834,19.7746409 C21.3678456,19.452417 20.0801853,16.2831815 19.543722,14.993915 C19.0210965,13.7387491 18.4903166,13.9087567 18.0950733,13.8887413 C17.7199691,13.870085 17.2902548,13.8661313 16.8611583,13.8661313 C16.4319382,13.8661313 15.7343629,14.0272433 15.144278,14.6716911 C14.5540695,15.3163861 12.8908108,16.8740077 12.8908108,20.0429961 C12.8908108,23.2121081 15.1978996,26.2734826 15.5198765,26.7031969 C15.8417297,27.1330348 20.0597992,33.6360772 26.5184865,36.4250193 C28.05461,37.0883707 29.2539305,37.4846023 30.1888494,37.7811274 C31.7312742,38.2713822 33.1348263,38.2021931 34.2440772,38.0363861 C35.4810811,37.8515521 38.0533127,36.478888 38.5898996,34.9750116 C39.1263629,33.470888 39.1263629,32.1818687 38.9653745,31.91339 C38.8045097,31.6447876 38.3752896,31.4835521 37.7314595,31.1612046 M25.9838765,47.2013591 L25.9752278,47.2013591 C22.1322625,47.1998763 18.3629343,46.1674749 15.0745946,44.2160926 L14.2926332,43.7519074 L6.18674906,45.8782394 L8.35027028,37.9751042 L7.84111198,37.1648494 C5.69723552,33.7549343 4.56500386,29.8139923 4.56660833,25.767166 C4.57130502,13.9587954 14.1789652,4.35187645 25.9924016,4.35187645 C31.7128649,4.35385328 37.0902239,6.58458689 41.1338378,10.6327722 C45.1773282,14.680834 47.4028724,20.0618996 47.4007737,25.7843398 C47.3959539,37.5936988 37.7882934,47.2013591 25.9838765,47.2013591 M44.2112742,7.556695 C39.3464092,2.68614672 32.8767258,0.00271814672 25.9836293,0 C11.7809421,0 0.221652509,11.5584247 0.215969112,25.7654363 C0.21411583,30.3069652 1.40058687,34.7397683 3.65553668,38.6475984 L-4.61852778e-14,52 L13.6596757,48.4167413 C17.4233205,50.4695597 21.6607876,51.5516293 25.9733745,51.5531121 L25.9838765,51.5531121 L25.984,51.5531121 C40.1852046,51.5531121 51.7456062,39.9934517 51.7512912,25.7860695 C51.7538842,18.9011274 49.0761392,12.4271197 44.2112742,7.556695" fill="currentColor"></path>
          </svg>
        </span>
      </div>
      <div className="g0rxnol2 lk9bdx0e d9lyu8cj qlylaf53 d4g41f7d">
        <progress value={progress} max={100} className="ZJWuG"></progress>
      </div>
      <div className="_3HbCE">WhatsApp</div>
      <div className="_3Tugb">
        <span>
          <svg width="10px" height="12px" viewBox="0 0 10 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z" fill="currentColor"></path>
          </svg>
        </span>&nbsp; Protegido com a criptografia de ponta a ponta
      </div>
      <div className="_2hEzC">
        <button className="emrlamx0 aiput80m h1a80dm5 sta02ykp g0rxnol2 l7jjieqr hnx8ox4h f8jlpxt4 l1l4so3b bbv8nyr4 m2gb0jvt rfxpxord gwd8mfxi mnh9o63b qmy7ya1v dcuuyf4k swfxs4et bgr8sfoe a6r886iw fx1ldmn8 orxa12fk bkifpc9x hjo1mxmu hgehfy8y p85b2i42 r4n0aloe pjr8ran5 snayiamo ulgj1aqb">
          <div className="tvf2evcx m0h2a7mj lb5m6g5c j7l1k36l ktfrpxia nu7pwgvd p357zi0d dnb887gk gjuq5ydh i2cterl7 ac2vgrno sap93d0t gndfcl4n">
            <div className="tvf2evcx m0h2a7mj lb5m6g5c j7l1k36l ktfrpxia nu7pwgvd p357zi0d dnb887gk gjuq5ydh i2cterl7 i6vnu1w3 qjslfuze ac2vgrno sap93d0t gndfcl4n" data-testid="content">Desconectar</div>
          </div>
        </button>
      </div>
      <div className="slKWV">Não feche esta janela. Suas mensagens estão sendo baixadas.</div>
    </div>
  )
}

export default Preloader
