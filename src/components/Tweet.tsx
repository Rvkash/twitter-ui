import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import './Tweet.css';

export function Tweet() {
  return (

    <a href="#" className="tweet">
      <img src="https://github.com/rvkash.png" alt="Rafael Linhares" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Rafael Linhares</strong>
          <span> @rvkash </span>
        </div>
        <p>
          Acabei de migrar para um projeto de Reactjs gigante, e os resultados foram:
          <br/>
          <br/>
          npm start: 32 segundos para 400ms
          <br/>
          <br/>
          npm build: de 120s para 22 s
          <br/>
        </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle/>
            20
          </button>

          <button type="button">
            <ArrowsClockwise/>
            20
          </button>

          <button type="button">
            <Heart/>
            20
          </button>

        </div>

      </div>
    </a>
  )
}