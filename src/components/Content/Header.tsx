import Button, { DropdownItem } from "@/components/Button"
import Avatar from "@/components/Avatar"

const Header = () => {
  return (
    <header className="AmmtE" data-testid="conversation-header">
      <div className="_2pr2H" title="Dados de perfil" role="button">
        <Avatar>
          <div className="lhggkp7q qq0sjtgm tkdu00h0 p357zi0d gndfcl4n ac2vgrno ln8gz9je ppled2lx bmttxqfw ban5wmpu">
            <span data-testid="default-group" data-icon="default-group">
              <svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" className="ln8gz9je ppled2lx" fill="none">
                <path className="background" d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z" fill="#DFE5E7"></path>
                <path className="primary" fillRule="evenodd" clipRule="evenodd" d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z"></path>
              </svg>
            </span>
          </div>
        </Avatar>
      </div>
      <div className="_2au8k" role="button" data-testid="conversation-info-header">
        <div className="_6u0RM">
          <div className="_3W2ap">
            <span data-testid="conversation-info-header-chat-title" dir="auto" className="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr _11JPr">Grupo 1</span>
          </div>
        </div>
        <div data-testid="chat-subtitle" className="p357zi0d r15c9g6i g4oj0cdv ovllcyds l0vqccxk pm5hny62">
          <span title="+55 75 8122-9569, +55 31 8866-0684, +55 71 9124-6686, +55 31 7582-6825, +55 47 8419-7260, +55 31 7358-1714, Você" className="ggj6brxn gfz4du6o r7fjleex lhj4utae le5p0ye3 _11JPr selectable-text copyable-text">+55 75 8122-9569, +55 31 8866-0684, +55 71 9124-6686, +55 31 7582-6825, +55 47 8419-7260, +55 31 7358-1714, Você</span>
        </div>
      </div>
      <div className="_1VwoK">
        <div className="_1sPvB _2XdMx">
          <Button>
            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
              <path fill="currentColor" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
            </svg>
          </Button>
          <Button dropdown={
            <>
              <DropdownItem title="Dados do contato" />
              <DropdownItem title="Selecionar mensagens" />
              <DropdownItem title="Fechar conversa" />
              <DropdownItem title="Silenciar notificações" />
              <DropdownItem title="Mensagens temporárias" />
              <DropdownItem title="Limpar mensagens" />
              <DropdownItem title="Apagar conversa" />
              <DropdownItem title="Denunciar" />
              <DropdownItem title="Bloquear" />
            </>
          }>
            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
              <path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
