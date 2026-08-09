insert into orthoraja_gallery (title, category, image_url, alt_text, published)
values
    ('OrthoRaja gallery item 1', 'Clinic', '/orthoraja-images/10.jpg', 'Dr. Raja Saha orthopedic surgeon', true),
    ('OrthoRaja gallery item 2', 'Clinic', '/orthoraja-images/1.jpg', 'Dr. Raja Saha profile', true),
    ('OrthoRaja gallery item 3', 'Clinic', '/orthoraja-images/3.jpg', 'Dr. Raja Saha orthopedic care', true),
    ('OrthoRaja gallery item 4', 'Clinic', '/orthoraja-images/4.jpg', 'Orthopedic consultation and care', true),
    ('OrthoRaja gallery item 5', 'Clinic', '/orthoraja-images/2.jpg', 'Orthopedic treatment moment', true),
    ('OrthoRaja gallery item 6', 'Clinic', '/orthoraja-images/6.jpg', 'Recovery care moment', true),
    ('OrthoRaja gallery item 7', 'Clinic', '/orthoraja-images/7.jpg', 'Patient care moment', true),
    ('OrthoRaja gallery item 8', 'Clinic', '/orthoraja-images/8.jpg', 'Orthopedic service moment', true),
    ('OrthoRaja gallery item 9', 'Clinic', '/orthoraja-images/9.jpg', 'Clinic and recovery moment', true),
    ('OrthoRaja gallery item 10', 'Clinic', '/orthoraja-images/5.jpg', 'Dr. Raja Saha clinic moment', true),
    ('OrthoRaja gallery item 11', 'Clinic', '/orthoraja-images/11.jpg', 'Dr. Raja Saha professional portrait', true);

insert into orthoraja_testimonials (patient_name, quote, rating, published)
values
    ('Aishik Saha', 'I am extremely grateful to Dr. Raja saha for the outstanding treatment he provided to my mother. She was suffering from severe osteoarthritis, and her condition had made walking and daily activities very difficult. Thanks to his dedication and expert approach, my mother has recovered wonderfully. She is now walking without any problem and feels even better than before.', 5, true),
    ('Dhiman Patra', 'I am a medical representative. Throughout my career, I have known many orthopedic doctors. However, for the patients, Dr. Raja Saha is no less than a God in the guise of a orthopedic surgeon.', 5, true),
    ('subrata barik', 'He is very good not only as a doctor but also as a person. He listens to his patients very carefully and does not prescribe any tests more than necessary.', 5, true),
    ('Malay Chakraborty', 'Dr. Raja Saha a renowned Orthopedic Surgeon, really is an ultimate solution for any ortho related issues. Few days ago I have got success in treatment of osteoarthritis, with a minimum expenditures. Great Doctor, well behave and obviously patient friendly.', 5, true);

insert into orthoraja_blogs (title, slug, excerpt, content, category, tags, cover_image_url, published)
values
    ('How to Know When Knee Pain Needs Specialist Care', 'knee-pain-specialist-care', 'SEO-ready article shell with tags, category, related articles and backend slug support.', 'SEO-ready article shell with tags, category, related articles and backend slug support.', 'Knee Care', 'knee-care,orthopedics', '/orthoraja-images/3.jpg', true),
    ('Arthroscopy Explained: Smaller Incisions, Focused Recovery', 'arthroscopy-explained', 'SEO-ready article shell with tags, category, related articles and backend slug support.', 'SEO-ready article shell with tags, category, related articles and backend slug support.', 'Arthroscopy', 'arthroscopy,recovery', '/orthoraja-images/6.jpg', true),
    ('Recovery Checklist After Hip Replacement Surgery', 'hip-replacement-recovery', 'SEO-ready article shell with tags, category, related articles and backend slug support.', 'SEO-ready article shell with tags, category, related articles and backend slug support.', 'Recovery', 'hip-replacement,recovery', '/orthoraja-images/2.jpg', true)
on conflict (slug) do nothing;
