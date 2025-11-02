import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Wind, Sun, Droplet, TreePine } from "lucide-react";

const Sustainability = () => {
  const commitments = [
    {
      icon: Leaf,
      title: "Net Zero 2030",
      description: "Target mencapai emisi nol bersih pada tahun 2030 melalui inovasi teknologi dan praktik berkelanjutan.",
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Menerapkan prinsip ekonomi sirkular dalam setiap aspek operasional kami.",
    },
    {
      icon: Wind,
      title: "100% Renewable",
      description: "Berkomitmen menggunakan 100% energi terbarukan dalam operasional perusahaan.",
    },
    {
      icon: Sun,
      title: "Solar Integration",
      description: "Mengintegrasikan teknologi solar untuk solusi energi yang lebih bersih.",
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      description: "Teknologi hemat air dalam sistem pendinginan dan operasional.",
    },
    {
      icon: TreePine,
      title: "Carbon Offset",
      description: "Program penanaman pohon untuk mengoffset jejak karbon operasional.",
    },
  ];

  const impacts = [
    { value: "30%", label: "Reduksi Emisi CO₂", description: "Rata-rata pengurangan emisi untuk klien kami" },
    { value: "1.2M", label: "Pohon Ditanam", description: "Melalui program carbon offset kami" },
    { value: "40%", label: "Efisiensi Energi", description: "Peningkatan rata-rata efisiensi klien" },
    { value: "500+", label: "Ton CO₂ Dicegah", description: "Emisi yang berhasil dicegah per tahun" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/20 via-background to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Keberlanjutan & Green Vision</h1>
            <p className="text-xl text-muted-foreground">
              Komitmen kami untuk menciptakan masa depan yang lebih hijau dan berkelanjutan bagi generasi mendatang
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/10 border-l-4 border-secondary p-8 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4">Visi Keberlanjutan Kami</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Di AETHERA Energy, kami percaya bahwa transisi energi bukan hanya tentang teknologi, 
                tetapi tentang menciptakan dampak positif yang bertahan lama. Setiap solusi yang kami 
                kembangkan dirancang dengan mempertimbangkan dampak lingkungan, sosial, dan ekonomi 
                untuk memastikan keberlanjutan jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Komitmen Keberlanjutan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((item, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-colors">
                <CardContent className="pt-6">
                  <item.icon className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Dampak Nyata yang Kami Ciptakan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {impact.value}
                </div>
                <div className="text-lg font-semibold mb-2">{impact.label}</div>
                <div className="text-sm text-muted-foreground">{impact.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Initiatives */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Inisiatif Hijau Kami</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Program Reforestasi</h3>
                <p className="text-muted-foreground mb-4">
                  Untuk setiap klien baru yang bergabung, kami menanam 100 pohon di berbagai kawasan 
                  konservasi di Indonesia. Hingga saat ini, kami telah menanam lebih dari 1.2 juta pohon 
                  yang berkontribusi dalam menyerap CO₂ dan melestarikan ekosistem.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Edukasi Energi Bersih</h3>
                <p className="text-muted-foreground mb-4">
                  Kami menyelenggarakan workshop dan seminar gratis untuk membangun kesadaran tentang 
                  pentingnya energi bersih dan efisiensi energi. Program ini telah menjangkau lebih dari 
                  10,000 peserta dari berbagai kalangan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Kemitraan Berkelanjutan</h3>
                <p className="text-muted-foreground mb-4">
                  Kami bermitra dengan organisasi lingkungan lokal dan internasional untuk memastikan 
                  bahwa setiap langkah yang kami ambil sejalan dengan standar keberlanjutan global dan 
                  memberikan dampak positif yang terukur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* UN SDGs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Mendukung UN Sustainable Development Goals</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Komitmen kami sejalan dengan berbagai tujuan pembangunan berkelanjutan PBB, khususnya:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-accent rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <div className="text-sm">Energi Bersih & Terjangkau</div>
              </div>
              <div className="p-6 bg-accent rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">9</div>
                <div className="text-sm">Industri, Inovasi & Infrastruktur</div>
              </div>
              <div className="p-6 bg-accent rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">11</div>
                <div className="text-sm">Kota & Komunitas Berkelanjutan</div>
              </div>
              <div className="p-6 bg-accent rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">13</div>
                <div className="text-sm">Aksi Terhadap Iklim</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
