/** Shared emoji-style mark for Workspace, Chats and the voice controls. */
export default function AtlasLogo({ size = 64, tone = 'pink' }: { size?: number; animated?: boolean; tone?: 'pink' | 'black' }) {
  return <img className="atlas-logo" src={tone === 'black' ? '/assets/atlas-nose-chats.svg' : '/assets/atlas-nose.svg'} width={size} height={size} alt="" aria-hidden="true" draggable={false} style={{ display: 'block', flexShrink: 0, objectFit: 'contain' }} />
}
