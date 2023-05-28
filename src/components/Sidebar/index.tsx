
import Messages from './Messages'
import Header from './Header'
import Search from './Search'

const Sidebar = () => {
  return (
    <div className="_2Ts6i _3RGKj">
      <Header />
      <div id="side" className="k8VZe">
        <Search />
        <span className="_3P5VY" data-testid="chat-butterbar"></span>
        <div className="g0rxnol2 _3fGK2" id="pane-side">
          <Messages />
          <div className="cm280p3y p357zi0d gndfcl4n ac2vgrno eg3lofc5 gqi0zhd6 pz0xruzv nzcjdldu emrlamx0 swyb62mu tviruh8d" data-testid="chatlist-e2e-message">
            <div className="qfejxiq4 ac2vgrno p357zi0d">
              <div className="dsh4tgtl e1gr2w1z bsvz8e3l hmy10g0s cw3vfol9">
                <span data-testid="lock-small-v2" data-icon="lock-small-v2" className="b9l0eqez kjemk6od l7jjieqr ms8wnqe5">
                  <svg viewBox="0 0 13 12" height="12" width="13" preserveAspectRatio="xMidYMid meet" className="">
                    <path d="M9.54004 3.4668C9.54004 2.87891 9.39421 2.33887 9.10254 1.84668C8.81543 1.34993 8.4235 0.958008 7.92676 0.670898C7.43457 0.379232 6.89681 0.233398 6.31348 0.233398C5.72559 0.233398 5.18327 0.379232 4.68652 0.670898C4.19434 0.958008 3.80241 1.34993 3.51074 1.84668C3.22363 2.33887 3.08008 2.87891 3.08008 3.4668V4.7041C3.05273 4.71322 2.99805 4.73828 2.91602 4.7793C2.61979 4.9388 2.39421 5.16439 2.23926 5.45605C2.15267 5.61556 2.09115 5.79102 2.05469 5.98242C2.01823 6.17383 2 6.45866 2 6.83691V9.25C2 9.62826 2.01823 9.91309 2.05469 10.1045C2.09115 10.2959 2.15267 10.4714 2.23926 10.6309C2.39421 10.9225 2.61979 11.1481 2.91602 11.3076C3.07096 11.3942 3.24414 11.4557 3.43555 11.4922C3.63151 11.5286 3.91634 11.5469 4.29004 11.5469H8.33008C8.70378 11.5469 8.98633 11.5286 9.17773 11.4922C9.3737 11.4557 9.54915 11.3942 9.7041 11.3076C9.99577 11.1527 10.2214 10.9271 10.3809 10.6309C10.4674 10.4714 10.529 10.2959 10.5654 10.1045C10.6019 9.91309 10.6201 9.62826 10.6201 9.25V6.83691C10.6201 6.45866 10.6019 6.17383 10.5654 5.98242C10.529 5.79102 10.4674 5.61556 10.3809 5.45605C10.2214 5.15983 9.99577 4.93424 9.7041 4.7793C9.62207 4.73828 9.56738 4.71322 9.54004 4.7041V3.4668ZM4.37207 3.4668C4.37207 3.11589 4.45866 2.79232 4.63184 2.49609C4.80501 2.19531 5.03971 1.95833 5.33594 1.78516C5.63672 1.61198 5.96257 1.52539 6.31348 1.52539C6.66439 1.52539 6.98796 1.61198 7.28418 1.78516C7.5804 1.95833 7.8151 2.19531 7.98828 2.49609C8.16146 2.79232 8.24805 3.11589 8.24805 3.4668V4.54004H4.37207V3.4668Z"></path>
                  </svg>
                </span>Suas mensagens pessoais são protegidas com a <a data-testid="chatlist-e2e-message-link" className="ajgl1lbb" role="button" rel="noreferrer noopener" target="_blank">criptografia de ponta a ponta</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
