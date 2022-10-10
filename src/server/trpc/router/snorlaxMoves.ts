import { t } from "../trpc";
import { z } from "zod";

export const snorlaxRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.snorlaxMoves.findMany();
  }),
  getMove: t.procedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.snorlaxMoves.findUnique({
      where: {
        identifier: input,
      },
    });
  }),
});
