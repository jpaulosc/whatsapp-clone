import Header from "./Header"
import Footer from "./Footer"

const Content = () => {
  return (
    <div className="_2Ts6i _2xAQV">
      <div id="main" className="_2Ex_b" data-testid="conversation-panel-wrapper">
        <div className="lhggkp7q qq0sjtgm tkdu00h0 ln8gz9je ppled2lx tbmiozwh fq1kqmrp shnvsdv4" data-asset-chat-background-dark="true" style={{ opacity: 0.06 }}></div>
        <Header />
        <span className="nfki698u tvf2evcx oq44ahr5 lb5m6g5c"></span>
        <div className="_3B19s" data-testid="conversation-panel-body">
          <div className="_3cjY2 copyable-area">
            <span></span>
            <div className="pboYv">
              <span></span>
            </div>
            <div className="_5kRIK" data-testid="conversation-panel-messages" tabIndex={0}>
              <div className="FdUCm"></div>
            </div>
          </div>
        </div>
        <div className="tvf2evcx oq44ahr5 lb5m6g5c e3u7tipa" style={{ height: '0px' }}></div>
        <Footer />
        <span></span>
      </div>
    </div>
  )
}

export default Content
