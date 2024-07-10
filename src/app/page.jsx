"use client";
import Card from "@/components/card";
import NavItem from "@/components/navItem";
import useHash from "@/hooks/useHash";

import menus from "@/data/menus.json";
import about from "@/data/about.json";
import experience from "@/data/experience.json";
import portfolio from "@/data/portfolio.json";
import strengths from "@/data/strengths.json";
import skills from "@/data/skills.json";
import education from "@/data/education.json";
import contact from "@/data/contact.json";

import Chip from "@/components/chip";
import FlatList from "@/components/flatList";
import Image from "next/image";
import Coffee from "@/components/coffee";
import Icon from "@/components/icon";
import Progress from "@/components/progress";

const getCurrentYear = () => new Date().getFullYear();
const workingStartDate = getCurrentYear() - 2018 + 1;

export default function Home() {
  const hash = useHash();
  return (
    <main className="body grid grid-cols-5 bg-gray-950 w-100 h-dvh select-none">
      <div className="flex flex-col shadow-gray-900 shadow-ml bg-gray-900/75 rounded-2xl m-4">
        <ul className="nav py-4 flex-1">
          <FlatList
            items={menus}
            keyExtractor={(item) => item.target}
            renderItem={(item) => (
              <NavItem {...item} selected={hash == item.target} />
            )}
          />
        </ul>
        <Coffee className="mb-4" />
      </div>
      <div className="col-span-4">
        <div className="container mx-auto px-4 h-screen overflow-x-auto p-4">
          <div className="flex flex gap-4 flex-col">
            <Card id={about.id} image={about.image} title={about.title}>
              <>
                <div className="flex gap-2">
                  {about.badges.map(({ icon, text }, key) => (
                    <Chip key={key} icon={icon} text={text} />
                  ))}
                </div>
                <div className="text-md" style={{ whiteSpace: "pre-line" }}>
                  {about.body}
                </div>
              </>
            </Card>
            <Card id={portfolio.id} title={portfolio.title}>
              <FlatList
                items={portfolio.items}
                keyExtractor={(item) => item.title}
                renderItem={(item) => (
                  <div className="flex">
                    {item.image && (
                      <Image
                        src={item.image}
                        width={500}
                        height={500}
                        alt="Image of the project"
                      />
                    )}
                    <div className="pl-4 py-4">
                      <p className="text-xl font-bold">{item.title}</p>
                      <p className="text-lg">{item.subtitle}</p>
                      <p className="text-base">{item.description}</p>
                    </div>
                  </div>
                )}
              />
            </Card>
            <Card id={strengths.id} title={strengths.title}>
              <FlatList
                items={strengths.items}
                keyExtractor={(item) => item.title}
                renderItem={({ title, description, icon }, id) => (
                  <div
                    className={`grid grid-cols-12 border-dotted py-2 ${
                      strengths.items.length != id + 1 && "border-b-2"
                    }`}
                  >
                    <div className="col-span-3">
                      <Icon name={icon} className="text-xl" />
                      <span className="text-xl">{title}</span>
                    </div>
                    <div className="col-span-9">{description}</div>
                  </div>
                )}
              />
            </Card>
            <Card id={skills.id} title={skills.title}>
              <div>
                <p className="text-lg">{skills.description}</p>
                <FlatList
                  className={"grid grid-cols-2 gap-4"}
                  items={Object.keys(skills.items)}
                  keyExtractor={(item) => item}
                  renderItem={(key) => {
                    const itens = skills.items[key];
                    return (
                      <div>
                        <p className="text-xl font-bold">{key}</p>
                        {itens.map(({ title, start, end }) => {
                          const _end =
                            end == "present"
                              ? new Date().getFullYear()
                              : Number(end);
                          const qtd = _end - start + 1;
                          const size = Math.round(
                            (qtd / workingStartDate) * 100
                          );
                          return (
                            <div key={title}>
                              <span className="text-lg">{title}</span>
                              <Progress size={size} />
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                />
              </div>
            </Card>
            <Card id={experience.id} title={experience.title}>
              <FlatList
                className={"border-dotted border-s-2 mt-4"}
                items={experience.items}
                keyExtractor={(item) => item.title}
                renderItem={(item) => (
                  <>
                    <div className="flex">
                      <div>...</div>
                      <Chip text={item.date} color="white" />
                    </div>
                    <div className="pl-4 py-4">
                      <p className="text-xl font-bold">{item.title}</p>
                      <p className="text-lg">{item.subtitle}</p>
                      <p className="text-base">{item.description}</p>
                    </div>
                  </>
                )}
              />
            </Card>
            <Card id={education.id} title={education.title}>
              <FlatList
                items={education.items}
                keyExtractor={(item) => item.title}
                renderItem={({ title, description, date }) => (
                  <div className="">
                    <p className="text-xl font-bold">{title}</p>
                    <p className="text-lg">{description}</p>
                    <p className="text-base">{date}</p>
                  </div>
                )}
              />
            </Card>
            <Card id={contact.id} title={contact.title}></Card>
          </div>
        </div>
      </div>
    </main>
  );
}
