create table if not exists orthoraja_users (
    id bigserial primary key,
    name varchar(120) not null,
    email varchar(180) not null unique,
    password_hash varchar(255) not null,
    role varchar(40) not null default 'ROLE_ADMIN',
    created_at timestamptz not null default now()
);

create table if not exists orthoraja_appointments (
    id bigserial primary key,
    name varchar(140) not null,
    phone varchar(40) not null,
    email varchar(180),
    age integer,
    gender varchar(40),
    city varchar(120),
    preferred_date date not null,
    preferred_time time not null,
    service varchar(160) not null,
    message text,
    status varchar(40) not null default 'PENDING',
    created_at timestamptz not null default now()
);

create table if not exists orthoraja_testimonials (
    id bigserial primary key,
    patient_name varchar(140) not null,
    quote text not null,
    rating integer not null default 5,
    photo_url text,
    published boolean not null default true,
    created_at timestamptz not null default now()
);

create table if not exists orthoraja_blogs (
    id bigserial primary key,
    title varchar(220) not null,
    slug varchar(240) not null unique,
    excerpt text,
    content text not null,
    category varchar(120),
    tags text,
    cover_image_url text,
    published boolean not null default true,
    created_at timestamptz not null default now()
);

create table if not exists orthoraja_gallery (
    id bigserial primary key,
    title varchar(180) not null,
    category varchar(120),
    image_url text not null,
    alt_text varchar(240),
    published boolean not null default true,
    created_at timestamptz not null default now()
);

create table if not exists orthoraja_contact_messages (
    id bigserial primary key,
    name varchar(140) not null,
    phone varchar(40) not null,
    email varchar(180),
    message text not null,
    status varchar(40) not null default 'NEW',
    created_at timestamptz not null default now()
);
