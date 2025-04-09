import { Link } from "react-router";
import { ArrowLeft, Mail, Phone, Plus, Search, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function CollectorsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Furman Art Gallery</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Collector
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Collectors</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search collectors..."
              className="w-full bg-background pl-8"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Collectors</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="vip">VIP</SelectItem>
              <SelectItem value="institutional">Institutional</SelectItem>
              <SelectItem value="new">New (Last 12 Months)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Tabs defaultValue="individual" className="space-y-4">
          <TabsList>
            <TabsTrigger value="individual">Individual</TabsTrigger>
            <TabsTrigger value="institutional">Institutional</TabsTrigger>
          </TabsList>
          <TabsContent value="individual" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {individualCollectors.map((collector) => (
                <CollectorCard key={collector.id} collector={collector} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="institutional" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {institutionalCollectors.map((collector) => (
                <CollectorCard key={collector.id} collector={collector} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function CollectorCard({ collector }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src={collector.avatar} alt={collector.name} />
          <AvatarFallback>
            <User className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-base">{collector.name}</CardTitle>
          <div className="text-sm text-muted-foreground">{collector.type}</div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span>{collector.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>{collector.phone}</span>
        </div>
        <div className="pt-2">
          <div className="font-medium">Collection</div>
          <div className="text-muted-foreground">{collector.collection}</div>
        </div>
        <div>
          <div className="font-medium">Last Purchase</div>
          <div className="text-muted-foreground">{collector.lastPurchase}</div>
        </div>
        <div>
          <div className="font-medium">Notes</div>
          <div className="text-muted-foreground line-clamp-2">
            {collector.notes}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          Profile
        </Button>
        <Button size="sm" className="flex-1">
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
}

const individualCollectors = [
  {
    id: 1,
    name: "Robert Thompson",
    type: "Individual - VIP",
    email: "robert.thompson@example.com",
    phone: "+1 (555) 123-4567",
    collection: "Contemporary painting, sculpture",
    lastPurchase: "Mar 15, 2024",
    notes: "Interested in emerging artists. Prefers private viewings.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Jennifer Wu",
    type: "Individual - Active",
    email: "jennifer.wu@example.com",
    phone: "+1 (555) 987-6543",
    collection: "Abstract painting, photography",
    lastPurchase: "Feb 28, 2024",
    notes: "Looking to expand collection. Budget $50-100K annually.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Michael Blackwood",
    type: "Individual - VIP",
    email: "m.blackwood@example.com",
    phone: "+1 (555) 456-7890",
    collection: "Mixed media, installation",
    lastPurchase: "Apr 2, 2024",
    notes: "Board member at Contemporary Art Museum. Influential collector.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    type: "Individual - New",
    email: "sarah.j@example.com",
    phone: "+1 (555) 234-5678",
    collection: "Emerging artists, works on paper",
    lastPurchase: "Jan 10, 2024",
    notes:
      "New collector, tech industry background. Interested in digital art.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

const institutionalCollectors = [
  {
    id: 5,
    name: "Metropolitan Museum of Modern Art",
    type: "Institution - Museum",
    email: "acquisitions@metmodern.org",
    phone: "+1 (555) 111-2222",
    collection: "Comprehensive contemporary collection",
    lastPurchase: "Mar 30, 2024",
    notes: "Contact: Dr. Elizabeth Chen, Curator of Contemporary Art",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Westfield Corporate Collection",
    type: "Institution - Corporate",
    email: "art@westfield.com",
    phone: "+1 (555) 333-4444",
    collection: "Office-suitable contemporary works",
    lastPurchase: "Feb 15, 2024",
    notes: "Expanding collection for new headquarters. Budget approved for Q2.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 7,
    name: "Foundation for the Arts",
    type: "Institution - Foundation",
    email: "grants@foundationarts.org",
    phone: "+1 (555) 555-6666",
    collection: "Supporting emerging artists",
    lastPurchase: "Apr 5, 2024",
    notes: "Also provides grants and residencies. Looking for new talent.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];
