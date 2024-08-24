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
import Input from "@/components/input";
import { useState } from "react";
import Button from "@/components/button";
import useTheme from "@/hooks/useTheme";
import TopIcon from "@/components/topIcon";
import pressStartFont from "@/utils/pressStartFont";

const getCurrentYear = () => new Date().getFullYear();
const workingStartDate = getCurrentYear() - 2018 + 1;

export default function Home() {
  const theme = useTheme();
  const hash = useHash();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [subjectError, setSubjectError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const sendMail = () => {
    setSubjectError(!subject);
    setBodyError(!body);
    if (!subject || !body) return;
    const url =
      "mailto:0hF6h@example.com?subject=" +
      encodeURI(subject) +
      "&body=" +
      encodeURI(body);

    window.open(url);
  };

  const openLink = (link) => window.open(link);

  return (
    <main className="body dark:bg-gray-950 bg-gray-400 w-100 h-full select-none flex flex-row">
      <div className="hidden md:block md:w-1/3 lg:block lg:w-1/4">
        <div className="flex flex-col shadow-gray-900 shadow-ml dark:bg-black/50 bg-gray-50/75 text-gray-900 dark:text-gray-50 h-full">
          <div className="mx-4 mt-4 font-bold">
            <div className="text-4xl italic absolute">Caio</div>
            <div
              className={`${pressStartFont} text-4xl text-gray-500 text-end w-100 pt-7`}
            >
              Rezende
            </div>
          </div>
          <ul className="nav py-4 flex-1 md:w-2/3 lg:w-3/4">
            <FlatList
              items={menus}
              keyExtractor={(item) => item.target}
              renderItem={(item) => (
                <NavItem {...item} selected={hash == item.target} />
              )}
            />
          </ul>
          <Coffee className="mb-2" />
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto px-4 h-screen overflow-x-auto pb-4">
          <div className="mb-4">
            <TopIcon
              icon={theme.value == "dark" ? "icon-moon-inv" : "icon-sun-inv"}
              onclick={theme.changeTheme}
              className="me-2"
            />
            <TopIcon
              icon={"icon-linkedin-squared"}
              onclick={openLink("https://www.linkedin.com/in/caiocsrezende/")}
              className="me-2"
            />
            <TopIcon
              icon={"icon-github"}
              onclick={() => window.open("https://github.com/caioxcezar")}
            />
          </div>
          <div className="flex gap-4 flex-col">
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
                renderItem={({ title, subtitle, description, link, image }) => (
                  <div className="flex">
                    {image && (
                      <Image
                        src={image}
                        width={250}
                        height={250}
                        alt="Image of the project"
                      />
                    )}
                    <div className="pl-4 py-4">
                      <div className="h-full">
                        <div className="h-3/4">
                          <p className="text-xl font-bold">{title}</p>
                          <p className="text-lg">{subtitle}</p>
                          <p className="text-base">{description}</p>
                        </div>
                        <Button
                          title={"Open Project"}
                          onclick={() => openLink(link)}
                        />
                      </div>
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
                    className={`grid grid-cols-12 border-dotted border-black dark:border-white py-2 ${
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
                className={"border-dotted border-s-2 mt-4 border-indigo-500"}
                items={experience.items}
                keyExtractor={(item) => item.title}
                renderItem={(item) => (
                  <>
                    <div className="flex">
                      <div className="text-indigo-500">...</div>
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
                className={
                  "grid grid-cols-2 gap-4 pb-2 border-dotted border-b-2 border-black dark:border-white"
                }
                items={education.academics}
                keyExtractor={(item) => item.title}
                renderItem={({ title, description, date }) => (
                  <div className="flex">
                    <Icon name="icon-graduation-cap" className="text-5xl" />
                    <div>
                      <p className="text-xl font-bold">{title}</p>
                      <p className="text-lg">{description}</p>
                      <p className="text-base">{date}</p>
                    </div>
                  </div>
                )}
              />
              <FlatList
                className={
                  "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-2"
                }
                items={education.certifications}
                keyExtractor={(item) => item.title}
                renderItem={({ title, description, date }) => (
                  <div className="flex">
                    <Icon name="icon-newspaper" className="text-3xl" />
                    <div>
                      <p className="text-lg font-bold">{title}</p>
                      <p className="text-base">{description}</p>
                    </div>
                  </div>
                )}
              />
            </Card>
            <Card id={contact.id} title={contact.title}>
              <span className="text-xl">
                Send a e-mail or message via{" "}
                <Button
                  title={"LinkedIn"}
                  onclick={() =>
                    openLink("https://www.linkedin.com/in/caiocsrezende/")
                  }
                />
              </span>
              <Input
                error={subjectError}
                label="subject"
                placeholder="subject"
                value={subject}
                onchange={setSubject}
              />
              <Input
                error={bodyError}
                label="body"
                placeholder="body"
                multiline
                value={body}
                rows={5}
                onchange={setBody}
              />
              <Button title={"Send Mail"} onclick={() => sendMail()} />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
