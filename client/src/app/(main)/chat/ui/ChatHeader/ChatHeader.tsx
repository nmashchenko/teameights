import { Typography } from '@/shared/ui';
import Image from 'next/image';
import { SearchIcon } from '@/shared/assets'; // TODO: Add another icons: Headphones and ThreeDotsVertilcal

interface IChatHeader {
  avatarGroup: string;
  countOfMembers: number;
  isGroup: boolean;
}

export const ChatHeader = () => {
  return (
    <div
      style={{
        position: 'sticky',
        width: '100%',
        height: '90px',
        borderBottom: '1px solid rgba(67, 71, 82, 1)',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '24px 32px 16px 32px',
      }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Image
            style={{ borderRadius: '100px', marginRight: '16px' }}
            src='https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            width={50}
            height={50}
          />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography size='heading_s'>Cool developers</Typography>
            <p style={{ color: 'rgba(143, 144, 148, 1)', fontSize: '13px' }}>7 members</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '4px', margin: '11px 0px' }}>
          <SearchIcon size="24" />
          <SearchIcon size="24" />
          <SearchIcon size="24" />
        </div>
      </div>
    </div>
  );
};
