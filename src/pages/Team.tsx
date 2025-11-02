import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion"; // tambahkan import ini di atas

const Team = () => {
const leadership = [
  {
    name: "Luqman Aprianto Darmawan",
    role: "Chief Executive Officer (Founder)",
    bio: "15+ tahun pengalaman di industri energi dengan fokus pada inovasi teknologi berkelanjutan.",
    image: "/team/Luqman.jpg",
  },
  {
    name: "Ilham Aji Pramana",
    role: "Co-Founder & Chief Operating Officer (COO)",
    bio: "Ahli AI dan machine learning dengan publikasi internasional di bidang optimasi energi.",
    image: "/team/Luqman.jpg",
  },
  {
    name: "Bagus Putra Andika",
    role: "Chief Energy Scientist (CES)",
    bio: "Pengalaman 20+ tahun dalam manajemen operasional perusahaan energi skala besar.",
    image: "/team/Luqman.jpg",
  },
    {
    name: "M. Faudzan Al Fajar",
    role: "Chief Financial Officer (CFO)",
    bio: "Pengalaman 20+ tahun dalam manajemen operasional perusahaan energi skala besar.",
    image: "/team/Foto Fauzan.jpg",
  },
  {
    name: "M. Al Hafiz",
    role: "Chief Chief Marketing Officer (CMO)",
    bio: "Pengalaman 20+ tahun dalam manajemen operasional perusahaan energi skala besar.",
    image: "/team/Luqman.jpg",
  },
  {
    name: "M. Kayla Izatta",
    role: "Chief Technology Officer (CTO)",
    bio: "Pengalaman 20+ tahun dalam manajemen operasional perusahaan energi skala besar.",
    image: "/team/Foto Kayla.jpg",
  },
  // tambahkan 3 anggota lain di sini
];


  const teams = [
    {
      department: "Engineering & Technology",
      description: "Tim ahli yang mengembangkan platform AI dan solusi teknologi inovatif.",
      size: "25+ engineers",
    },
    {
      department: "Sustainability & Research",
      description: "Fokus pada riset dan pengembangan solusi energi berkelanjutan.",
      size: "12+ researchers",
    },
    {
      department: "Business Development",
      description: "Membangun kemitraan strategis dan mengembangkan pasar.",
      size: "15+ professionals",
    },
    {
      department: "Customer Success",
      description: "Memastikan kepuasan klien dengan dukungan 24/7.",
      size: "18+ specialists",
    },
  ];

  const values = [
    { title: "Innovation First", description: "Kami mendorong kreativitas dan eksperimen untuk solusi terbaik" },
    { title: "Collaboration", description: "Kerja tim yang solid adalah kunci kesuksesan kami" },
    { title: "Continuous Learning", description: "Investasi dalam pengembangan profesional setiap anggota tim" },
    { title: "Diversity & Inclusion", description: "Menghargai keberagaman perspektif dan latar belakang" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent/20 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tim Kami</h1>
            <p className="text-xl text-muted-foreground text-center">
              Bertemu dengan para ahli yang berkomitmen menciptakan inovasi dalam teknologi energi berkelanjutan.
              Bersama di AETHERA Energy, kami memadukan keahlian, penelitian, dan dedikasi untuk membangun masa depan
              yang lebih hijau dan efisien bagi dunia.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
     <section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Tim Kepemimpinan Utama</h2>

    {/* === Baris Atas: CEO & Founder === */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
      {leadership
        .filter((leader) => leader.role.includes("Founder") || leader.role.includes("CEO"))
        .map((leader, index) => (
          <Card
            key={index}
            className="text-center bg-gradient-to-br from-primary/10 to-background border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
          >
            <CardContent className="pt-10 pb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative flex justify-center"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-36 h-36 rounded-full object-cover border-4 border-primary/50 shadow-lg"
                />
              </motion.div>

              <h3 className="text-2xl font-bold mt-6 mb-1">{leader.name}</h3>
              <p className="text-primary font-semibold mb-3">{leader.role}</p>
              <p className="text-base text-muted-foreground mb-4">{leader.bio}</p>
              <button className="text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="h-6 w-6 mx-auto" />
              </button>
            </CardContent>
          </Card>
        ))}
    </div>

    {/* === Baris Bawah: Anggota Tim Lain === */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {leadership
        .filter(
          (leader) =>
            !leader.role.includes("Founder") && !leader.role.includes("CEO")
        )
        .map((leader, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative flex justify-center"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-28 h-28 rounded-full object-cover border-2 border-primary/40 shadow-md"
                />
              </motion.div>
              <h3 className="text-lg font-semibold mt-5 mb-1">{leader.name}</h3>
              <p className="text-primary font-medium mb-3">{leader.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
              <button className="text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="h-5 w-5 mx-auto" />
              </button>
            </CardContent>
          </Card>
        ))}
    </div>
  </div>
</section>

      {/* Departments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Departemen Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {teams.map((team, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{team.department}</h3>
                  <p className="text-muted-foreground mb-3">{team.description}</p>
                  <div className="text-sm font-medium text-primary">{team.size}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Budaya Kerja Kami</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Di AETHERA Energy, kami menciptakan lingkungan kerja yang mendukung pertumbuhan, 
            inovasi, dan kolaborasi
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-accent rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Bergabung dengan Tim Kami</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kami selalu mencari talenta terbaik yang passionate tentang energi berkelanjutan 
              dan ingin membuat dampak positif bagi dunia.
            </p>
            <a href="/careers" className="inline-block">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium transition-colors">
                Lihat Posisi Tersedia
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
