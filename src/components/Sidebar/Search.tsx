const Search = () => {
  return (
    <div tabIndex={-1} className="_3gYev">
      <div className="_1s7Pa _3wQ5i o7fBL" data-testid="chat-list-search-container">
        <div className="_1EUay">
          <button data-testid="icon-search-morph" className="opCKJ _28iyj" aria-label="Pesquisar ou começar uma nova conversa" tabIndex={-1}>
            <div className="_3xdht _2hW8J">
              <span data-testid="back" data-icon="back" className="">
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                  <path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                </svg>
              </span>
            </div>
            <div className="_3xdht _1ZD3q">
              <span data-testid="search" data-icon="search" className="">
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                  <path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path>
                </svg>
              </span>
            </div>
          </button>
          <span></span>
          <div data-testid="input-placeholder" className="_3sHED">Pesquisar ou começar uma nova conversa</div>
          <div className="_2vDPL">
            <div className="g0rxnol2 ln8gz9je lexical-rich-text-input">
              <div className="to2l77zo gfz4du6o ag5g9lrv bze30y65 kao4egtt qh0vvdkp" role="textbox" title="Caixa de texto de pesquisa" data-testid="chat-list-search" tabIndex={3} data-tab="3" data-lexical-editor="true" style={{ minHeight: "1.47em", userSelect: "text", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                <p className="selectable-text copyable-text iq0m558w">
                  <br />
                </p>
              </div>
              <div className="lhggkp7q qq0sjtgm jxacihee c3x5l3r8 b9fczbqn t35qvd06 m62443ks rkxvyd19 c5h0bzs2 bze30y65 kao4egtt"></div>
            </div>
          </div>
        </div>
        <button data-tab="4" aria-label="Filtro de conversas não lidas" title="Filtro de conversas não lidas" className="tt8xd2xn bugiwsl0 mpdn4nr2 fooq7fky">
          <div className="tvf2evcx m0h2a7mj lb5m6g5c j7l1k36l ktfrpxia nu7pwgvd p357zi0d dnb887gk gjuq5ydh i2cterl7 ac2vgrno sap93d0t gndfcl4n ekdr8vow dhq51u3o s4k44ver g9p5wyxn i0tg5vk9 aoogvgrq o2zu3hjb">
            <span data-testid="filter" data-icon="filter" className="">
              <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                <path fill="currentColor" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
              </svg>
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Search
