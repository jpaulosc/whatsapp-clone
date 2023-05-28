import { useState } from "react"

const Notification = () => {
  const [status, setStatus] = useState<boolean>(false);
  const [data, setData] = useState();
  return (
    <>
      {status && (
        <div className="lhggkp7q qq0sjtgm ebjesfe0 jxacihee tkdu00h0" tabIndex={-1}>
          <div data-animate-modal-backdrop="true" className="snyj76hw qq0sjtgm tkdu00h0 cm280p3y ln8gz9je ppled2lx bgigc5s4 i44ccddp ag5g9lrv j9fb8bew _3cjY2 copyable-area" style={{ opacity: '1' }}>
            <div className="cm280p3y p357zi0d f8m0rgwh gndfcl4n ac2vgrno ln8gz9je s4r5ooj2 lffynu9d sdfuwbjb" data-testid="confirm-popup" role="dialog">
              <div className="cm280p3y p357zi0d tvf2evcx oq44ahr5 lb5m6g5c f8m0rgwh gofbmt1g i5tg98hk f9ovudaz przvwfww gx1rr48f gfz4du6o r7fjleex thr4l2wc fe61fa5g qj4wrk6p cphhpnv8 tfm3omh7 a27i2aag culzvsue" data-animate-modal-popup="true" style={{ opacity: 1, transform: "scaleX(1) scaleY(1)" }}>
                <div className="g0rxnol2 ggj6brxn m0h2a7mj r6au09pb fd365im1 hmy10g0s" data-animate-modal-body="true">
                  <div data-testid="popup-contents" className="f8jlpxt4 iuhl9who">
                    <div className="_39vwq _10bZG">
                      <div className="_2KUfc">
                        <span data-testid="back" data-icon="back">
                          <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                            <path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                          </svg>
                        </span>
                      </div>
                      <div className="_3yrCj">
                        <span dir="ltr" className="_11JPr">Permitir microfone</span>
                      </div>
                      <div className="_1zVJV">O WhatsApp precisa ter acesso ao microfone do seu computador para que você possa gravar mensagens de voz. Para permitir o acesso, clique em "Permitir".</div>
                      <div className="_1V131">
                        <button className="emrlamx0 aiput80m h1a80dm5 sta02ykp g0rxnol2 l7jjieqr hnx8ox4h f8jlpxt4 l1l4so3b bbv8nyr4 m2gb0jvt rfxpxord gwd8mfxi mnh9o63b qmy7ya1v dcuuyf4k swfxs4et bgr8sfoe a6r886iw fx1ldmn8 orxa12fk bkifpc9x hjo1mxmu oixtjehm rpz5dbxo bn27j4ou snayiamo szmswy5k">
                          <div className="tvf2evcx m0h2a7mj lb5m6g5c j7l1k36l ktfrpxia nu7pwgvd p357zi0d dnb887gk gjuq5ydh i2cterl7 ac2vgrno sap93d0t gndfcl4n">
                            <div className="tvf2evcx m0h2a7mj lb5m6g5c j7l1k36l ktfrpxia nu7pwgvd p357zi0d dnb887gk gjuq5ydh i2cterl7 i6vnu1w3 qjslfuze ac2vgrno sap93d0t gndfcl4n" data-testid="content">OK</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Notification
