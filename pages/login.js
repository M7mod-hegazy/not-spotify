import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img
        className="mb-5 w-52"
        src="./logo.png"
        alt=""
      />
      <img
        className="mb-5 w-52"
        src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
        alt=""
      />

      {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, {callbackUrl: "/"})}
            
            
            
            >Login with {provider.name}</button>
          </div>
        ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
