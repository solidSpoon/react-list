import { Virtuoso } from 'react-virtuoso'
import { generateUsers } from './data'

export default function App() {
  return (
  <>
    <Virtuoso
      style={{ height: '100%' }}
      data={generateUsers(100)}
      itemContent={(index, user) => (
        <div
          style={{
            backgroundColor: user.bgColor,
            padding: '1rem 0.5rem',
          }}
        >
          <h4>{user.name}</h4>
          <div style={{ marginTop: '1rem' }}>{user.description}</div>
        </div>
      )}
    />
    <style>{`html, body, #root { height: 100% }`}</style>
  </>
  )
}

