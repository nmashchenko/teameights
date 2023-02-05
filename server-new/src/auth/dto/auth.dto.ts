import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { User } from '@Users/users.schema';

export class Auth {
	@ApiProperty({ example: User, description: `Initial user object` })
	user: User;
	@ApiProperty({
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByb2RneSIsImVtYWlsIjoibW1hc2hjMjhAdWljLmVkdSIsImlkIjoiNjNhNGEyZmE4NWRkMTQ1Mjk3NzY1MzU0Iiwicm9sZXMiOlt7Il9pZCI6IjYzYTFlMTY4N2NhNjY3YTc3Y2Y0MjY1NCIsInZhbHVlIjoiVVNFUiIsImRlc2NyaXB0aW9uIjoiZGVmYXVsdCB1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMi0xMi0yMFQxNjoyMzowNC4yOTBaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0yMFQxNjoyMzowNC4yOTBaIiwiX192IjowfV0sImlhdCI6MTY3MTczNDAxMCwiZXhwIjoxNjcxODIwNDEwfQ.95WFP00wEd1nd1q6kw-KRXKAPiEPy-NeRrSbzZ54xnY',
		description: `Access Token`,
	})
	accessToken: string;
	@ApiProperty({
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByb2RneSIsImVtYWlsIjoibW1hc2hjMjhAdWljLmVkdSIsImlkIjoiNjNhNGEyZmE4NWRkMTQ1Mjk3NzY1MzU0Iiwicm9sZXMiOlt7Il9pZCI6IjYzYTFlMTY4N2NhNjY3YTc3Y2Y0MjY1NCIsInZhbHVlIjoiVVNFUiIsImRlc2NyaXB0aW9uIjoiZGVmYXVsdCB1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMi0xMi0yMFQxNjoyMzowNC4yOTBaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0yMFQxNjoyMzowNC4yOTBaIiwiX192IjowfV0sImlhdCI6MTY3MTczNDAxMCwiZXhwIjoxNjc0MzI2MDEwfQ.NKlodTaNCt12YufRfddLZIDUGOASNDPf3XCB96Juydg',
		description: `Refresh Token`,
	})
	refreshToken: string;
}
