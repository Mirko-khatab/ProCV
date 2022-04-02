import Clintform from '../components/Clintform';
import Team from '../components/Team';
export default function Home() {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
    <Team/>
    <Clintform/>
      </main>
    </div>
  )
}
