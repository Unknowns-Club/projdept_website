import { Box, css, Heading, Text } from "@kuma-ui/core";
import { useEffect, useState } from "react";

export const Hero = () => {
  const isDark = useState(false);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    isDark[1](html.style.colorScheme === "dark");
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        isDark[1](html.style.colorScheme === "dark");
      });
    });
    observer.observe(html, { attributeFilter: ["style"] });
    return () => observer.disconnect();
  }, []);

  return (
    <Box m={["40px auto", "80px auto 0px"]}>
      <Box position="relative">
        <Box role="presentation" display={["initial"]} bg="white">
          <Box
            bg="radial-gradient(circle at calc(75% - 25px) 50%, hsl(186 75% 85%), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at calc(60% - 25px) 30%, hsl(200 75% 85%), rgba(255, 255, 255, 0) 10%)"
            position="fixed"
            top="0px"
            right="0px"
            bottom="0px"
            left="0px"
            zIndex="-1"
          />
        </Box>
        <Heading
          fontSize={["1.25rem", "2.25rem"]}
          fontWeight={800}
          className={css`
            letter-spacing: -0.025em;
            background-image: linear-gradient(to right, skyblue, pink);
            background-clip: text;
            color: transparent;
            @media (max-width: sm) {
              line-height: 2.5rem;
            }
          `}
        >
          NEAUACM Project-Dept
        </Heading>
        <Heading
          fontSize={["2.25rem", "3.25rem"]}
          fontWeight={800}
          className={css`
            letter-spacing: -0.025em;
            line-height: 1;
            @media (max-width: sm) {
              line-height: 2.5rem;
            }
          `}
        >
          东北农业大学 ACM 集训队项目部
        </Heading>
        <Text
          color="#718096"
          mt="1.5rem"
          fontSize="1.125rem"
          className={css`
            line-height: 1.75rem;
            @media (prefers-color-scheme: dark) {
              mix-blend-mode: plus-lighter;
            }
          `}
          style={{
            mixBlendMode: isDark[0] ? "plus-lighter" : "initial",
            fontFamily: "monospace",
          }}
        >
          (you) ={">"} learn(you, project);
        </Text>
      </Box>
      <Box as="section" mt="5rem">
        <Box
          display="grid"
          gap="1.5rem"
          gridTemplateColumns={[
            "repeat(1,minmax(0,1fr))",
            "repeat(1,minmax(0,1fr))",
            "repeat(3,minmax(0,1fr))",
          ]}
        >
          {gridData.map((data) => (
            <Box key={data.emoji}>
              <Box
                width="3rem"
                height="3rem"
                fontSize="24px"
                display="flex"
                alignItems="center"
                justify="center"
                bg="#f6f6f7"
                borderRadius="6px"
                mb="0.75rem"
              >
                {data.emoji}
              </Box>
              <Heading
                as="h2"
                className={css`
                  font-size: 1.25rem;
                  line-height: 1.75rem;
                  font-weight: 700;
                  margin-bottom: 0.25rem;
                `}
              >
                {data.title}
              </Heading>
              <Text
                className={css`
                  font-size: 1rem;
                  line-height: 1.5rem;
                `}
              >
                {data.description}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const gridData = [
  {
    emoji: "✨",
    title: "Web 前端",
    description:
      "学习基于 JavaScript 和 Vue/React 框架的现代前端开发技术，包括页面设计、数据请求、构建工具链等。",
  },
  {
    emoji: "🛠️",
    title: "Web 后端",
    description:
      "学习基于 Go 语言的全面后端开发技能，包括服务端开发、数据库设计、API 设计等。",
  },
  {
    emoji: "📱",
    title: "跨平台客户端",
    description:
      "学习基于 Flutter 的跨平台客户端开发技能，包括 Dart 语言、UI/UX 设计、路由导航等。",
  },
  {
    emoji: "🥇",
    title: "DevOps",
    description:
      "学习现代开发技术及部署方式，包括 CI/CD、容器、Docker、自动化测试、自动化监控等。",
  },
  {
    emoji: "💻",
    title: "人工智能与机器学习",
    description:
      "学习基本的机器学习、深度学习概念，使用 TensorFlow、PyTorch 构建模型等。",
  },
  {
    emoji: "🤝",
    title: "参与软件项目",
    description:
      "参与软件项目开发任务，学习现代协作开发技术，锻炼团队协作能力。",
  },
];
