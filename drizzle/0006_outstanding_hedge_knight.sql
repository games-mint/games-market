CREATE TABLE "reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"author_id" uuid NOT NULL,
	"receiver_id " uuid NOT NULL,
	"rating" integer NOT NULL,
	"message" text
);
--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "rating" integer;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_author_id_profiles_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_receiver_id _profiles_id_fk" FOREIGN KEY ("receiver_id ") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;