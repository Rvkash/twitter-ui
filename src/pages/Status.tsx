import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"

const answer = [
  "Concordo...",
  "Faz sentido...",
  "Tudo bem"
]

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet"/>

      
      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, ipsum harum sed recusandae sapiente aliquid eligendi accusamus in quaerat temporibus, repellat quisquam. Sed eum id quasi dignissimos unde! Aperiam, quas!" />

      <div className="separator"/>

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/rvkash.png" alt="Rafael Linhares" />
          <textarea id="tweet" placeholder="Tweet your asnwer?" />
        </label>

        <button type="submit">Answer</button>
      </form>
      
      {answer.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
      
    </main>
  )
}