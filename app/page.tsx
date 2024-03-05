import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className='text-white flex flex-col items-center p-2 justify-center h-screen '>
      <h1 className=" text-5xl font-bold mb-20">ChatGPT</h1>
      <div className='flex space-x-2 text-center'>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-8 w-8 text-yellow-400"/>
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"What is the difference between a dog and a cat ?"</p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <BoltIcon className="h-8 w-8 text-blue-600"/>
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Change the ChatGPT Model to use"</p>
            <p className="infoText">"Messages are stored in Firebase's Firestore"</p>
            <p className="infoText">"Hot Toast notification when ChatGPT is thinking!"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <ExclamationTriangleIcon className="h-8 w-8 text-red-400"/>
            <h2>Limitation</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"May occasionally incorrect information"</p>
            <p className="infoText">"May occasionally harmful instruction or biased content"</p>
            <p className="infoText">"Limited knowledge of world and events after 2021"</p>
          </div>
        </div>
      </div>
    </div>
  )
}
