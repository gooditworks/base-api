import {ResolverHandler, HealthResolvers} from "../../types"

type EmptyResolver = ResolverHandler<HealthResolvers["empty"]>

const empty: EmptyResolver = () => "void"

export default empty
